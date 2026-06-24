// ========================================
// AUTH MIDDLEWARE
// ========================================

/**
 * Simple authentication middleware
 * In production, use JWT tokens
 */
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    // For development, we'll accept a simple token
    if (authHeader && authHeader === 'Bearer secret-token') {
        next();
    } else {
        res.status(401).json({
            success: false,
            error: 'Unauthorized',
            message: 'Authentication required. Please provide a valid token.'
        });
    }
};

// Optional: Admin only middleware
const requireAdmin = (req, res, next) => {
    const userRole = req.headers['x-user-role'];
    
    if (userRole === 'admin') {
        next();
    } else {
        res.status(403).json({
            success: false,
            error: 'Forbidden',
            message: 'Admin access required'
        });
    }
};

module.exports = {
    authenticate,
    requireAdmin
};