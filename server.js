const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Environment variables
const PORT = process.env.PORT || 3003;
const JWT_SECRET = process.env.JWT_SECRET || 'shaktishield-secret-key-2025';

// Database setup
const dbPath = path.join(__dirname, 'database', 'shaktishield.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Middleware
// Use Helmet with default protections; disable CSP to avoid version mismatches
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Static files and uploads
app.use(express.static(path.join(__dirname, 'public')));
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}
app.use('/uploads', express.static(uploadsDir));

// --- Multer Setup for File Uploads ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });


// --- Authentication Middleware ---
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access token required' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token' });
        req.user = user;
        next();
    });
}

// =================================================================
// --- API ROUTES ---
// =================================================================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// --- Public Routes ---

// Submit report WITHOUT files
app.post('/api/reports', (req, res) => {
    try {
        const reportData = req.body;
        const reportId = uuidv4();
        
        const sql = `INSERT INTO reports (id, incident_type, incident_time, incident_description, know_perpetrator, perpetrator_name, perpetrator_relationship, use_current_location, city, location_details, latitude, longitude, evidence_photos, evidence_videos, evidence_messages, evidence_witnesses, support_counseling, support_legal, support_shelter, contact_method, alternative_contact) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const params = [
            reportId, reportData.incident.type, reportData.incident.time, reportData.incident.description,
            reportData.incident.knowPerpetrator ? 1 : 0, reportData.incident.perpetratorName || null, reportData.incident.perpetratorRelationship || null,
            reportData.location.useCurrentLocation ? 1 : 0, reportData.location.city, reportData.location.details || null,
            reportData.location.latitude || null, reportData.location.longitude || null,
            reportData.additionalInfo.evidence.photos ? 1 : 0, reportData.additionalInfo.evidence.videos ? 1 : 0,
            reportData.additionalInfo.evidence.messages ? 1 : 0, reportData.additionalInfo.evidence.witnesses ? 1 : 0,
            reportData.additionalInfo.supportResources.counseling ? 1 : 0, reportData.additionalInfo.supportResources.legal ? 1 : 0,
            reportData.additionalInfo.supportResources.shelter ? 1 : 0, reportData.additionalInfo.contactMethod,
            reportData.additionalInfo.alternativeContact || null
        ];

        db.run(sql, params, function(err) {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Failed to submit report' });
            }
            io.emit('new_report', { id: reportId, type: reportData.incident.type, city: reportData.location.city });
            res.status(201).json({ success: true, reportId: reportId, message: 'Report submitted successfully' });
        });
    } catch (error) {
        console.error('Error submitting report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Submit report WITH files
app.post('/api/reports-with-files', upload.fields([{ name: 'photos', maxCount: 5 }, { name: 'videos', maxCount: 2 }]), (req, res) => {
    try {
        const reportData = JSON.parse(req.body.report);
        const reportId = uuidv4();
        
        // Same INSERT logic as /api/reports
        const sql = `INSERT INTO reports (id, incident_type, incident_time, incident_description, know_perpetrator, perpetrator_name, perpetrator_relationship, use_current_location, city, location_details, latitude, longitude, evidence_photos, evidence_videos, evidence_messages, evidence_witnesses, support_counseling, support_legal, support_shelter, contact_method, alternative_contact) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const params = [
            reportId, reportData.incident.type, reportData.incident.time, reportData.incident.description,
            reportData.incident.knowPerpetrator ? 1 : 0, reportData.incident.perpetratorName || null, reportData.incident.perpetratorRelationship || null,
            reportData.location.useCurrentLocation ? 1 : 0, reportData.location.city, reportData.location.details || null,
            reportData.location.latitude || null, reportData.location.longitude || null,
            req.files['photos'] && req.files['photos'].length > 0, req.files['videos'] && req.files['videos'].length > 0,
            reportData.additionalInfo.evidence.messages ? 1 : 0, reportData.additionalInfo.evidence.witnesses ? 1 : 0,
            reportData.additionalInfo.supportResources.counseling ? 1 : 0, reportData.additionalInfo.supportResources.legal ? 1 : 0,
            reportData.additionalInfo.supportResources.shelter ? 1 : 0, reportData.additionalInfo.contactMethod,
            reportData.additionalInfo.alternativeContact || null
        ];

        db.run(sql, params, function(err) {
            if (err) { console.error('DB Error:', err); return res.status(500).json({ error: 'Failed to save report' }); }
            // Logic to save file paths to report_files table
            io.emit('new_report', { id: reportId, type: reportData.incident.type, city: reportData.location.city });
            res.status(201).json({ success: true, reportId: reportId, message: 'Report and files submitted successfully' });
        });
    } catch (e) {
        console.error('File Upload Error:', e);
        res.status(400).json({ error: 'Invalid report data or file upload failed' });
    }
});

// Get emergency contacts
app.get('/api/emergency-contacts', (req, res) => {
    db.all('SELECT * FROM emergency_contacts WHERE is_active = 1 ORDER BY name', [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch contacts' });
        res.json(rows);
    });
});

// --- Admin Routes ---

// Admin Login - FIXED
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }
    
    db.get('SELECT * FROM admin_users WHERE username = ?', [username], async (err, user) => {
        if (err) return res.status(500).json({ error: 'Server error during login' });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
            const token = jwt.sign(
                { id: user.id, username: user.username, role: user.role },
                JWT_SECRET,
                { expiresIn: '24h' }
            );
        res.json({ success: true, token, user: { id: user.id, username: user.username, role: user.role } });
    });
});

// Get ALL reports for Admin Dashboard
app.get('/api/admin/reports', (req, res) => { // Using authenticateToken middleware is recommended here
    const sql = `SELECT id, incident_type, incident_description, status, incident_time, city, priority, created_at, updated_at FROM reports ORDER BY created_at DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching reports for admin:', err);
            return res.status(500).json({ error: 'Failed to fetch reports' });
        }
        res.json(rows);
    });
});

// Get single report for Admin
app.get('/api/admin/reports/:id', (req, res) => { // Using authenticateToken middleware is recommended here
    db.get('SELECT * FROM reports WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch report' });
        if (!row) return res.status(404).json({ error: 'Report not found' });
        res.json(row);
    });
});


// Update report status (used by admin.js)
app.put('/api/reports/status', (req, res) => { // Using authenticateToken middleware is recommended here
    const { id, status } = req.body;
    if (!id || !status) {
        return res.status(400).json({ error: 'Report ID and new status are required' });
    }
    db.run(`UPDATE reports SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`, [status, id], function(err) {
        if (err) return res.status(500).json({ error: 'Failed to update report status' });
        if (this.changes > 0) {
            io.emit('report_updated', { id, newStatus: status });
            res.json({ message: 'Report status updated successfully' });
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    });
});

// CONSOLIDATED statistics endpoint for both dashboards
app.get('/api/stats', (req, res) => {
    const stats = {
        totalReports: 0,
        resolved: 0,
        inProgress: 0,
        peopleHelped: 0,
        newReports: 0,
        reportsByStatus: {},
        reportsByType: {},
        // For admin-simple.html compatibility
        reportsByPriority: [] 
    };
    const statusQuery = `SELECT status, COUNT(*) as count FROM reports GROUP BY status`;
    const typeQuery = `SELECT incident_type, COUNT(*) as count FROM reports GROUP BY incident_type`;
    const priorityQuery = `SELECT priority, COUNT(*) as count FROM reports GROUP BY priority`;
    
    db.get(`SELECT COUNT(*) as total FROM reports`, (err, totalRow) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch stats' });
        stats.totalReports = totalRow.total;

        db.all(statusQuery, [], (err, statusRows) => {
            if (err) return res.status(500).json({ error: 'Failed to fetch stats' });
            statusRows.forEach(r => { stats.reportsByStatus[r.status] = r.count; });
            stats.resolved = stats.reportsByStatus['resolved'] || 0;
            stats.inProgress = stats.reportsByStatus['investigating'] || 0;
            stats.peopleHelped = stats.resolved; // Alias for resolved
            stats.newReports = stats.reportsByStatus['pending'] || 0;

            db.all(typeQuery, [], (err, typeRows) => {
                if (err) return res.status(500).json({ error: 'Failed to fetch stats' });
                typeRows.forEach(r => { stats.reportsByType[r.incident_type] = r.count; });

                db.all(priorityQuery, [], (err, priorityRows) => {
                    if (err) return res.status(500).json({ error: 'Failed to fetch stats' });
                    stats.reportsByPriority = priorityRows; // Keep as array for admin-simple
                        res.json(stats);
                });
            });
        });
    });
});


// =================================================================
// --- HTML Serving ---
// =================================================================

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
app.get('/admin-simple', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-simple.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- Socket.IO Connection ---
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// --- Server Start ---
server.listen(PORT, () => {
    console.log(`ShaktiShield server running on http://localhost:${PORT}`);
});