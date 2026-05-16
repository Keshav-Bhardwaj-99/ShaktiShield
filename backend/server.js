const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Environment Configuration
const PORT = process.env.PORT || 3003;
const FRONTEND_PATH = path.resolve(__dirname, process.env.FRONTEND_PATH || '../frontend');
const UPLOADS_DIR = path.resolve(__dirname, process.env.UPLOADS_DIR || 'uploads');

// Middleware
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

// Static folders
app.use(express.static(FRONTEND_PATH)); // Serve static files from frontend root
app.use('/admin', express.static(path.join(FRONTEND_PATH, 'admin')));
app.use('/js', express.static(path.join(FRONTEND_PATH, 'js')));
app.use('/css', express.static(path.join(FRONTEND_PATH, 'css')));
app.use('/assets', express.static(path.join(FRONTEND_PATH, 'assets')));
app.use('/uploads', express.static(UPLOADS_DIR));

// Import Routes
const authRoutes = require('./routes/authRoutes');
const reportRoutes = require('./routes/reportRoutes')(io);
const statsRoutes = require('./routes/statsRoutes');

// API Routes
app.use('/api/admin', authRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/stats', statsRoutes);

// HTML Fallbacks for SPA-like behavior or specific routes
app.get('/admin', (req, res) => {
    res.sendFile(path.join(FRONTEND_PATH, 'admin', 'admin.html'));
});

// Fix for root - server already serves FRONTEND_PATH/home as static root
app.get('/', (req, res) => {
    res.sendFile(path.join(FRONTEND_PATH, 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(FRONTEND_PATH, 'index.html'));
});

// Socket.IO Connection
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Server Start
if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`ShaktiShield backend running on http://localhost:${PORT}`);
        console.log(`Serving frontend from: ${FRONTEND_PATH}`);
    });
}

module.exports = app;
