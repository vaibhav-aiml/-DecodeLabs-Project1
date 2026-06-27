// ========================================
// SERVER - Main Entry Point
// ========================================

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Import routes
const routes = require('./src/routes');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// ========================================
// MIDDLEWARE
// ========================================

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// ========================================
// DATABASE CONNECTION
// ========================================

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📁 Database: ${conn.connection.db.databaseName}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

// Connect to MongoDB
connectDB();

// MongoDB Connection Events
mongoose.connection.on('connected', () => {
    console.log('🟢 MongoDB connection established');
});

mongoose.connection.on('disconnected', () => {
    console.log('🔴 MongoDB connection disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error(`🔴 MongoDB connection error: ${err}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('🟡 MongoDB connection closed through app termination');
    process.exit(0);
});

// ========================================
// ROUTES
// ========================================

// API routes
app.use('/api', routes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API is running',
        database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
        timestamp: new Date().toISOString()
    });
});

// 404 handler - Route not found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.url}`
    });
});

// ========================================
// ERROR HANDLER
// ========================================

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    
    // Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({
            success: false,
            error: 'Validation Error',
            errors: errors
        });
    }

    // Mongoose Duplicate Key Error
    if (err.code === 11000) {
        const field = Object.keys(err.keyPattern)[0];
        return res.status(400).json({
            success: false,
            error: 'Duplicate Error',
            message: `${field} already exists`
        });
    }

    // Cast Error (Invalid ObjectId)
    if (err.name === 'CastError') {
        return res.status(400).json({
            success: false,
            error: 'Invalid ID',
            message: `Invalid ${err.path}: ${err.value}`
        });
    }

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        error: err.name || 'Internal Server Error',
        message: err.message || 'Something went wrong on the server'
    });
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📝 Health check: http://localhost:${PORT}/`);
    console.log(`📡 API endpoints: http://localhost:${PORT}/api/users`);
    console.log(`🗄️  Database: ${process.env.NODE_ENV === 'development' ? 'MongoDB Atlas' : 'MongoDB'}\n`);
});