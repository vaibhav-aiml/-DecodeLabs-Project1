const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API is healthy',
        endpoints: {
            users: '/api/users'
        }
    });
});

module.exports = router;