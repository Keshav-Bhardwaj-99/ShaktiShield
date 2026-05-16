const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

const uploadsDir = path.resolve(__dirname, '..', process.env.UPLOADS_DIR || 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

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

module.exports = (io) => {
    // Public
    router.post('/', (req, res) => reportController.submitReport(req, res, io));
    router.post('/with-files', upload.fields([{ name: 'photos', maxCount: 5 }, { name: 'videos', maxCount: 2 }]), (req, res) => reportController.submitReportWithFiles(req, res, io));
    router.get('/emergency-contacts', reportController.getEmergencyContacts);

    // Admin
    router.get('/admin-all', reportController.getAllReports);
    router.get('/:id', reportController.getReportById);
    router.put('/status', (req, res) => reportController.updateReportStatus(req, res, io));

    return router;
};
