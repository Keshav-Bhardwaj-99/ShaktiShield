const db = require('../config/db');

exports.getStats = (req, res) => {
    const stats = {
        totalReports: 0,
        resolved: 0,
        inProgress: 0,
        peopleHelped: 0,
        newReports: 0,
        reportsByStatus: {},
        reportsByType: {},
        reportsByPriority: [] 
    };
    
    const statusQuery = `SELECT status, COUNT(*) as count FROM reports GROUP BY status`;
    const typeQuery = `SELECT incident_type, COUNT(*) as count FROM reports GROUP BY incident_type`;
    const priorityQuery = `SELECT priority, COUNT(*) as count FROM reports GROUP BY priority`;
    
    db.get(`SELECT COUNT(*) as total FROM reports`, (err, totalRow) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch stats' });
        stats.totalReports = totalRow.total;

        db.all(statusQuery, [], (err, statusRows) => {
            if (err) return res.status(500).json({ error: 'Failed to fetch status stats' });
            statusRows.forEach(r => { stats.reportsByStatus[r.status] = r.count; });
            stats.resolved = stats.reportsByStatus['resolved'] || 0;
            stats.inProgress = stats.reportsByStatus['investigating'] || 0;
            stats.peopleHelped = stats.resolved; 
            stats.newReports = stats.reportsByStatus['pending'] || 0;

            db.all(typeQuery, [], (err, typeRows) => {
                if (err) return res.status(500).json({ error: 'Failed to fetch type stats' });
                typeRows.forEach(r => { stats.reportsByType[r.incident_type] = r.count; });

                db.all(priorityQuery, [], (err, priorityRows) => {
                    if (err) return res.status(500).json({ error: 'Failed to fetch priority stats' });
                    stats.reportsByPriority = priorityRows;
                    res.json(stats);
                });
            });
        });
    });
};
