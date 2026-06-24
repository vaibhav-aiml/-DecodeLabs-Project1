// ========================================
// API CONFIGURATION
// ========================================

const API_BASE_URL = 'http://localhost:5000/api';

// ========================================
// API FUNCTIONS
// ========================================

const API = {
    /**
     * Get all users from backend
     */
    getUsers: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/users`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Create a new user
     */
    createUser: async (userData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Update a user
     */
    updateUser: async (id, userData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating user:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Delete a user
     */
    deleteUser: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error deleting user:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Check if server is running
     */
    healthCheck: async () => {
        try {
            const response = await fetch('http://localhost:5000/');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Server not running:', error);
            return { success: false, error: 'Server not running' };
        }
    }
};