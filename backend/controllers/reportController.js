const { v4: uuidv4 } = require('uuid');
const db = require('../config/db');

// Submit report WITHOUT files
exports.submitReport = (req, res, io) => {
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
            if (io) io.emit('new_report', { id: reportId, type: reportData.incident.type, city: reportData.location.city });
            res.status(201).json({ success: true, reportId: reportId, message: 'Report submitted successfully' });
        });
    } catch (error) {
        console.error('Error submitting report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Submit report WITH files
exports.submitReportWithFiles = (req, res, io) => {
    try {
        const reportData = JSON.parse(req.body.report);
        const reportId = uuidv4();
        
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
            if (io) io.emit('new_report', { id: reportId, type: reportData.incident.type, city: reportData.location.city });
            res.status(201).json({ success: true, reportId: reportId, message: 'Report and files submitted successfully' });
        });
    } catch (e) {
        console.error('File Upload Error:', e);
        res.status(400).json({ error: 'Invalid report data or file upload failed' });
    }
};

exports.getEmergencyContacts = (req, res) => {
    db.all('SELECT * FROM emergency_contacts WHERE is_active = 1 ORDER BY name', [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch contacts' });
        res.json(rows);
    });
};

exports.getAllReports = (req, res) => {
    const sql = `SELECT id, incident_type, incident_description, status, incident_time, city, priority, created_at, updated_at FROM reports ORDER BY created_at DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch reports' });
        res.json(rows);
    });
};

exports.getReportById = (req, res) => {
    db.get('SELECT * FROM reports WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch report' });
        if (!row) return res.status(404).json({ error: 'Report not found' });
        res.json(row);
    });
};

exports.updateReportStatus = (req, res, io) => {
    const { id, status } = req.body;
    if (!id || !status) {
        return res.status(400).json({ error: 'Report ID and new status are required' });
    }
    db.run(`UPDATE reports SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`, [status, id], function(err) {
        if (err) return res.status(500).json({ error: 'Failed to update report status' });
        if (this.changes > 0) {
            if (io) io.emit('report_updated', { id, newStatus: status });
            res.json({ message: 'Report status updated successfully' });
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    });
};
