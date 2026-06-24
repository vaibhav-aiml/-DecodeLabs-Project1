// ========================================
// USER MODEL - Data Structure
// ========================================

const fs = require('fs');
const path = require('path');

// Path to JSON data file
const dataPath = path.join(__dirname, '../../data/users.json');

// ========================================
// READ USERS FROM FILE
// ========================================

const readUsers = () => {
    try {
        if (!fs.existsSync(dataPath)) {
            fs.writeFileSync(dataPath, JSON.stringify([]));
            return [];
        }
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users:', error);
        return [];
    }
};

// ========================================
// WRITE USERS TO FILE
// ========================================

const writeUsers = (users) => {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing users:', error);
        return false;
    }
};

// ========================================
// USER MODEL FUNCTIONS
// ========================================

const UserModel = {
    /**
     * Get all users
     */
    getAll: () => {
        return readUsers();
    },

    /**
     * Get user by ID
     */
    getById: (id) => {
        const users = readUsers();
        return users.find(user => user.id === id) || null;
    },

    /**
     * Get user by email
     */
    getByEmail: (email) => {
        const users = readUsers();
        return users.find(user => user.email === email) || null;
    },

    /**
     * Create a new user
     */
    create: (userData) => {
        const users = readUsers();
        
        // Generate new ID
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        
        const newUser = {
            id: newId,
            ...userData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        users.push(newUser);
        writeUsers(users);
        return newUser;
    },

    /**
     * Update a user
     */
    update: (id, updateData) => {
        const users = readUsers();
        const index = users.findIndex(user => user.id === id);
        
        if (index === -1) return null;
        
        users[index] = {
            ...users[index],
            ...updateData,
            updatedAt: new Date().toISOString()
        };
        
        writeUsers(users);
        return users[index];
    },

    /**
     * Delete a user
     */
    delete: (id) => {
        const users = readUsers();
        const index = users.findIndex(user => user.id === id);
        
        if (index === -1) return false;
        
        users.splice(index, 1);
        writeUsers(users);
        return true;
    }
};

module.exports = UserModel;