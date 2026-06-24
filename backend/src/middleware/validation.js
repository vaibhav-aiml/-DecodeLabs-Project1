// ========================================
// VALIDATION MIDDLEWARE
// ========================================

/**
 * Validate user data for POST and PUT requests
 */
const validateUser = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];

    // For POST requests, all fields are required
    if (req.method === 'POST' || req.method === 'PUT') {
        // Validate name (for POST requests)
        if (req.method === 'POST' && !name) {
            errors.push('Name is required');
        }
        if (name && name.length < 2) {
            errors.push('Name must be at least 2 characters');
        }
        
        // Validate email
        if (!email) {
            errors.push('Email is required');
        } else if (!isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        
        // Validate password (for POST requests)
        if (req.method === 'POST' && !password) {
            errors.push('Password is required');
        }
        if (password && password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }
    }

    // If there are validation errors
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            error: 'Validation Failed',
            errors: errors
        });
    }

    next();
};

/**
 * Validate user ID parameter
 */
const validateUserId = (req, res, next) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id) || id < 1) {
        return res.status(400).json({
            success: false,
            error: 'Validation Error',
            message: 'Invalid user ID. Must be a positive integer'
        });
    }
    
    next();
};

/**
 * Helper: Validate email format
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = {
    validateUser,
    validateUserId,
    isValidEmail
};