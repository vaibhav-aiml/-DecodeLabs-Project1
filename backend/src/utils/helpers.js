// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Generate a unique ID (fallback if not using DB)
 */
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

/**
 * Sanitize user data (remove sensitive fields)
 */
const sanitizeUser = (user) => {
    const { password, ...sanitized } = user;
    return sanitized;
};

/**
 * Format API response
 */
const formatResponse = (success, data, message, error) => {
    return {
        success,
        data: data || null,
        message: message || null,
        error: error || null,
        timestamp: new Date().toISOString()
    };
};

/**
 * Paginate results
 */
const paginate = (data, page = 1, limit = 10) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    
    return {
        data: data.slice(start, end),
        pagination: {
            total: data.length,
            page: page,
            limit: limit,
            totalPages: Math.ceil(data.length / limit)
        }
    };
};

/**
 * Check if object is empty
 */
const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

module.exports = {
    generateId,
    sanitizeUser,
    formatResponse,
    paginate,
    isEmpty
};