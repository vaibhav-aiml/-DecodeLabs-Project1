const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const routes = require('./src/routes');  // <-- Make sure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This line is CRITICAL - registers all routes under /api
app.use('/api', routes);  // <-- Make sure this exists!

// Health check
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.url}`
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.name || 'Internal Server Error',
        message: err.message || 'Something went wrong on the server'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints: http://localhost:${PORT}/api/users`);
});