const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

// Ensure database directory exists
const dbDir = path.join(__dirname, '..', 'database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Create database connection
const db = new sqlite3.Database(path.join(dbDir, 'shaktishield.db'), (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        process.exit(1);
    }
    console.log('Connected to SQLite database');
});

// Initialize database tables
async function initDatabase() {
    try {
        console.log('Initializing database...');

        // Create reports table
        await runQuery(`CREATE TABLE IF NOT EXISTS reports (
            id TEXT PRIMARY KEY,
            incident_type TEXT NOT NULL,
            incident_time TEXT NOT NULL,
            incident_description TEXT NOT NULL,
            know_perpetrator BOOLEAN DEFAULT 0,
            perpetrator_name TEXT,
            perpetrator_relationship TEXT,
            use_current_location BOOLEAN DEFAULT 0,
            city TEXT NOT NULL,
            location_details TEXT,
            latitude REAL,
            longitude REAL,
            evidence_photos BOOLEAN DEFAULT 0,
            evidence_videos BOOLEAN DEFAULT 0,
            evidence_messages BOOLEAN DEFAULT 0,
            evidence_witnesses BOOLEAN DEFAULT 0,
            support_counseling BOOLEAN DEFAULT 0,
            support_legal BOOLEAN DEFAULT 0,
            support_shelter BOOLEAN DEFAULT 0,
            contact_method TEXT DEFAULT 'anonymous',
            alternative_contact TEXT,
            status TEXT DEFAULT 'pending',
            priority TEXT DEFAULT 'medium',
            assigned_officer TEXT,
            notes TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )`);
        console.log('✓ Reports table created');

        // Create admin users table
        await runQuery(`CREATE TABLE IF NOT EXISTS admin_users (
            id TEXT PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'admin',
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )`);
        console.log('✓ Admin users table created');

        // Create emergency contacts table
        await runQuery(`CREATE TABLE IF NOT EXISTS emergency_contacts (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            type TEXT NOT NULL,
            city TEXT,
            description TEXT,
            is_active BOOLEAN DEFAULT 1,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )`);
        console.log('✓ Emergency contacts table created');

        // Create report updates table
        await runQuery(`CREATE TABLE IF NOT EXISTS report_updates (
            id TEXT PRIMARY KEY,
            report_id TEXT NOT NULL,
            status TEXT NOT NULL,
            message TEXT,
            updated_by TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (report_id) REFERENCES reports (id)
        )`);
        console.log('✓ Report updates table created');

        // Insert default admin user
        const adminId = uuidv4();
        const adminPassword = 'admin123';
        const adminHash = await bcrypt.hash(adminPassword, 10);
        
        await runQuery(`INSERT OR IGNORE INTO admin_users (id, username, email, password_hash, role) 
                       VALUES (?, ?, ?, ?, ?)`, 
                       [adminId, 'admin', 'admin@shaktishield.com', adminHash, 'super_admin']);
        console.log('✓ Default admin user created');

        // Insert default emergency contacts
        const defaultContacts = [
            ['police', 'Police Emergency', '100', 'police', 'All India', 'All India Emergency Number'],
            ['women-helpline', 'National Women\'s Helpline', '1091', 'helpline', 'All India', 'For women in distress'],
            ['fire', 'Fire Services', '101', 'fire', 'All India', 'For fire emergencies'],
            ['ambulance', 'Ambulance Services', '102', 'medical', 'All India', 'Medical emergencies'],
            ['childline', 'Childline India', '1098', 'helpline', 'All India', 'For children in need'],
            ['disaster', 'Disaster Management', '1070', 'emergency', 'All India', 'National Disaster Response Force']
        ];

        for (const [id, name, phone, type, city, description] of defaultContacts) {
            await runQuery(`INSERT OR IGNORE INTO emergency_contacts (id, name, phone, type, city, description) 
                           VALUES (?, ?, ?, ?, ?, ?)`, 
                           [id, name, phone, type, city, description]);
        }
        console.log('✓ Default emergency contacts created');

        // Insert sample reports for testing
        const sampleReports = [
            {
                id: uuidv4(),
                incident_type: 'harassment',
                incident_time: '2025-01-15T14:30:00',
                incident_description: 'Verbal harassment at bus stop',
                city: 'Mumbai',
                status: 'pending',
                priority: 'medium'
            },
            {
                id: uuidv4(),
                incident_type: 'stalking',
                incident_time: '2025-01-14T20:00:00',
                incident_description: 'Someone following me home from work',
                city: 'Delhi',
                status: 'investigating',
                priority: 'high'
            },
            {
                id: uuidv4(),
                incident_type: 'domestic',
                incident_time: '2025-01-13T18:00:00',
                incident_description: 'Domestic violence incident',
                city: 'Bangalore',
                status: 'resolved',
                priority: 'high'
            }
        ];

        for (const report of sampleReports) {
            await runQuery(`INSERT OR IGNORE INTO reports (
                id, incident_type, incident_time, incident_description, city, status, priority
            ) VALUES (?, ?, ?, ?, ?, ?, ?)`, 
            [report.id, report.incident_type, report.incident_time, report.incident_description, 
             report.city, report.status, report.priority]);
        }
        console.log('✓ Sample reports created');

        console.log('\n🎉 Database initialization completed successfully!');
        console.log('\nDefault admin credentials:');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('Email: admin@shaktishield.com');
        console.log('\nYou can now start the server with: npm start');

    } catch (error) {
        console.error('❌ Database initialization failed:', error);
        process.exit(1);
    } finally {
        db.close((err) => {
            if (err) {
                console.error('Error closing database:', err.message);
            } else {
                console.log('Database connection closed');
            }
        });
    }
}

// Helper function to run queries
function runQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this);
            }
        });
    });
}

// Run initialization
initDatabase();
