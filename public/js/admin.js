document.addEventListener('DOMContentLoaded', () => {
    // --- Lightweight login gate ---
    const loginOverlay = document.getElementById('admin-login-overlay');
    const loginForm = document.getElementById('admin-login-form');
    const loginError = document.getElementById('admin-login-error');

    function isAuthenticated() {
        return Boolean(localStorage.getItem('authToken'));
    }

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const username = (document.getElementById('admin-username') || {}).value || '';
            const password = (document.getElementById('admin-password') || {}).value || '';
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (!res.ok) throw new Error('Invalid credentials');
            const data = await res.json();
            if (data && data.token) {
                localStorage.setItem('authToken', data.token);
                loginOverlay.classList.add('hidden');
                // proceed to load data
                fetchReports();
                fetchStats();
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (e) {
            if (loginError) loginError.classList.remove('hidden');
        }
    }

    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (!isAuthenticated() && loginOverlay) {
        loginOverlay.classList.remove('hidden');
    }
    const reportsTableBody = document.getElementById('reports-table-body');
    const socket = io();
    let statusChartInstance = null;
    let typeChartInstance = null;

    // --- Core Data Fetching ---
    async function fetchReports() {
        try {
            const response = await fetch('/api/admin/reports'); // Changed to dedicated admin route
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const reports = await response.json();
            renderReports(Array.isArray(reports) ? reports : []);
        } catch (error) {
            console.error('Error fetching reports:', error);
            reportsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-red-500">Failed to load reports.</td></tr>';
        }
    }

    async function fetchStats() {
        try {
            const response = await fetch('/api/stats');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const stats = await response.json();
            updateStats(stats);
            renderCharts(stats);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    }

    // --- Real-time Updates ---
    socket.on('new_report', () => {
        console.log('New report received, refreshing dashboard...');
        fetchReports();
        fetchStats();
        // mark as having new items if badge element exists
        const badge = document.getElementById('new-reports-badge');
        if (badge) badge.dataset.hasNew = '1';
    });

    socket.on('report_updated', () => {
        console.log('Report updated, refreshing dashboard...');
        fetchReports();
        fetchStats();
    });

    // --- UI Rendering ---
    function renderReports(reports) {
        reportsTableBody.innerHTML = '';
        if (reports.length === 0) {
            reportsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4">No reports found.</td></tr>';
            return;
        }

        reports.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm">${report.id.substring(0, 8)}...</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm capitalize">${report.incident_type}</td>
                <td class="px-6 py-4 text-sm max-w-xs truncate">${report.incident_description}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(report.status)}">
                        ${report.status}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">${new Date(report.incident_time).toLocaleString()}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">${report.city}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="update-status-btn text-purple-600 hover:text-purple-900" data-id="${report.id}" data-status="${report.status}">Update</button>
                </td>
            `;
            reportsTableBody.appendChild(row);
        });
    }

    function updateStats(stats) {
        document.getElementById('total-reports-count').textContent = stats.totalReports || 0;
        document.getElementById('resolved-reports-count').textContent = stats.resolved || 0;
        document.getElementById('in-progress-reports-count').textContent = stats.inProgress || 0;
        document.getElementById('people-helped-count').textContent = stats.peopleHelped || 0;
        document.getElementById('new-reports-badge').textContent = stats.newReports || 0;
    }

    function renderCharts(stats) {
        if (statusChartInstance) statusChartInstance.destroy();
        if (typeChartInstance) typeChartInstance.destroy();

        if (stats.reportsByStatus && typeof stats.reportsByStatus === 'object') {
            createPieChart('statusChart', 'Reports by Status', stats.reportsByStatus);
        }
        if (stats.reportsByType && typeof stats.reportsByType === 'object') {
            createPieChart('typeChart', 'Reports by Incident Type', stats.reportsByType);
        }
    }

    function createPieChart(canvasId, title, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: '# of Reports',
                    data: Object.values(data),
                    backgroundColor: ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'],
                    hoverOffset: 4
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: title } } }
        });

        if (canvasId === 'statusChart') statusChartInstance = chartInstance;
        else if (canvasId === 'typeChart') typeChartInstance = chartInstance;
    }
    
    // --- Actions & Event Listeners ---
    // Make the bell badge scroll to the reports table and briefly highlight it
    const bellBadge = document.getElementById('new-reports-badge');
    if (bellBadge && bellBadge.parentElement) {
        bellBadge.parentElement.style.cursor = 'pointer';
        bellBadge.parentElement.addEventListener('click', () => {
            const tableSection = document.getElementById('reports-table');
            if (!tableSection) return;
            tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Temporary highlight to draw attention
            const originalBoxShadow = tableSection.style.boxShadow;
            tableSection.style.boxShadow = '0 0 0 4px rgba(139, 92, 246, 0.6)';
            setTimeout(() => { tableSection.style.boxShadow = originalBoxShadow || ''; }, 1200);

            // If there are pending new items, clear the visual alert
            if (bellBadge.dataset.hasNew === '1') {
                // set the badge number to 0 visually but keep real value on next fetch
                bellBadge.textContent = '0';
                delete bellBadge.dataset.hasNew;
            }
        });
    }
    async function updateReportStatus(id, newStatus) {
        try {
            const response = await fetch('/api/reports/status', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus }),
            });
            if (!response.ok) throw new Error('Failed to update status');
            // Real-time update will trigger a refresh
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update report status.');
        }
    }

    // Event delegation for update buttons
    reportsTableBody.addEventListener('click', async (e) => {
        if (e.target.classList.contains('update-status-btn')) {
            const id = e.target.dataset.id;
            const currentStatus = e.target.dataset.status;
            const newStatus = prompt(`Enter new status for report ${id.substring(0, 8)}... (e.g., 'investigating', 'resolved', 'closed')`, currentStatus);

            if (newStatus && newStatus.trim() !== '' && newStatus !== currentStatus) {
                await updateReportStatus(id, newStatus.trim());
            }
        }
    });

    const refreshBtn = document.getElementById('refresh-button');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            fetchReports();
            fetchStats();
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('authToken'); // Basic logout
            window.location.href = '/'; // Redirect to home
        });
    }

    function getStatusColor(status) {
        switch (status ? status.toLowerCase() : '') {
            case 'resolved': return 'bg-green-100 text-green-800';
            case 'investigating': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    // --- Initial Load ---
    fetchReports();
    fetchStats();
});
document.addEventListener('DOMContentLoaded', () => {
    const reportsTableBody = document.getElementById('reports-table-body');
    const socket = io();
    let statusChartInstance = null;
    let typeChartInstance = null;

    // --- Core Data Fetching ---
    async function fetchReports() {
        try {
            const response = await fetch('/api/admin/reports'); // Changed to dedicated admin route
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const reports = await response.json();
            renderReports(Array.isArray(reports) ? reports : []);
        } catch (error) {
            console.error('Error fetching reports:', error);
            reportsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-red-500">Failed to load reports.</td></tr>';
        }
    }

    async function fetchStats() {
        try {
            const response = await fetch('/api/stats');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const stats = await response.json();
            updateStats(stats);
            renderCharts(stats);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    }

    // --- Real-time Updates ---
    socket.on('new_report', () => {
        console.log('New report received, refreshing dashboard...');
        fetchReports();
        fetchStats();
    });

    socket.on('report_updated', () => {
        console.log('Report updated, refreshing dashboard...');
        fetchReports();
        fetchStats();
    });

    // --- UI Rendering ---
    function renderReports(reports) {
        reportsTableBody.innerHTML = '';
        if (reports.length === 0) {
            reportsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4">No reports found.</td></tr>';
            return;
        }

        reports.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm">${report.id.substring(0, 8)}...</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm capitalize">${report.incident_type}</td>
                <td class="px-6 py-4 text-sm max-w-xs truncate">${report.incident_description}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(report.status)}">
                        ${report.status}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">${new Date(report.incident_time).toLocaleString()}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">${report.city}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="update-status-btn text-purple-600 hover:text-purple-900" data-id="${report.id}" data-status="${report.status}">Update</button>
                </td>
            `;
            reportsTableBody.appendChild(row);
        });
    }

    function updateStats(stats) {
        document.getElementById('total-reports-count').textContent = stats.totalReports || 0;
        document.getElementById('resolved-reports-count').textContent = stats.resolved || 0;
        document.getElementById('in-progress-reports-count').textContent = stats.inProgress || 0;
        document.getElementById('people-helped-count').textContent = stats.peopleHelped || 0;
        document.getElementById('new-reports-badge').textContent = stats.newReports || 0;
    }

    function renderCharts(stats) {
        if (statusChartInstance) statusChartInstance.destroy();
        if (typeChartInstance) typeChartInstance.destroy();

        if (stats.reportsByStatus && typeof stats.reportsByStatus === 'object') {
            createPieChart('statusChart', 'Reports by Status', stats.reportsByStatus);
        }
        if (stats.reportsByType && typeof stats.reportsByType === 'object') {
            createPieChart('typeChart', 'Reports by Incident Type', stats.reportsByType);
        }
    }

    function createPieChart(canvasId, title, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: '# of Reports',
                    data: Object.values(data),
                    backgroundColor: ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'],
                    hoverOffset: 4
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: title } } }
        });

        if (canvasId === 'statusChart') statusChartInstance = chartInstance;
        else if (canvasId === 'typeChart') typeChartInstance = chartInstance;
    }
    
    // --- Actions & Event Listeners ---
    async function updateReportStatus(id, newStatus) {
        try {
            const response = await fetch('/api/reports/status', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus }),
            });
            if (!response.ok) throw new Error('Failed to update status');
            // Real-time update will trigger a refresh
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update report status.');
        }
    }

    // Event delegation for update buttons
    reportsTableBody.addEventListener('click', async (e) => {
        if (e.target.classList.contains('update-status-btn')) {
            const id = e.target.dataset.id;
            const currentStatus = e.target.dataset.status;
            const newStatus = prompt(`Enter new status for report ${id.substring(0, 8)}... (e.g., 'investigating', 'resolved', 'closed')`, currentStatus);

            if (newStatus && newStatus.trim() !== '' && newStatus !== currentStatus) {
                await updateReportStatus(id, newStatus.trim());
            }
        }
    });

    document.getElementById('refresh-button').addEventListener('click', () => {
        fetchReports();
        fetchStats();
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('authToken'); // Basic logout
        window.location.href = '/'; // Redirect to home
    });

    function getStatusColor(status) {
        switch (status ? status.toLowerCase() : '') {
            case 'resolved': return 'bg-green-100 text-green-800';
            case 'investigating': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    // --- Initial Load ---
    fetchReports();
    fetchStats();
});