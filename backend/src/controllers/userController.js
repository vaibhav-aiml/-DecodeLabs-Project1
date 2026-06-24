// ========================================
// USER CONTROLLER - Request Handlers
// ========================================

const UserModel = require('../models/userModel');

// ========================================
// GET ALL USERS
// ========================================

const getAllUsers = (req, res) => {
    try {
        const users = UserModel.getAll();
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// ========================================
// GET USER BY ID
// ========================================

const getUserById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = UserModel.getById(id);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: `User with ID ${id} does not exist`
            });
        }
        
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// ========================================
// CREATE USER
// ========================================

const createUser = (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        // Check if user already exists
        const existingUser = UserModel.getByEmail(email);
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'Validation Error',
                message: 'User with this email already exists'
            });
        }
        
        // Create user
        const newUser = UserModel.create({
            name,
            email,
            password, // In production, this should be hashed!
            role: role || 'user'
        });
        
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// ========================================
// UPDATE USER
// ========================================

const updateUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email, password, role } = req.body;
        
        // Check if user exists
        const existingUser = UserModel.getById(id);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: `User with ID ${id} does not exist`
            });
        }
        
        // Check if email is taken by another user
        if (email && email !== existingUser.email) {
            const emailTaken = UserModel.getByEmail(email);
            if (emailTaken) {
                return res.status(400).json({
                    success: false,
                    error: 'Validation Error',
                    message: 'Email is already taken by another user'
                });
            }
        }
        
        // Update user
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (password) updateData.password = password;
        if (role) updateData.role = role;
        
        const updatedUser = UserModel.update(id, updateData);
        
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// ========================================
// DELETE USER
// ========================================

const deleteUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        // Check if user exists
        const existingUser = UserModel.getById(id);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: `User with ID ${id} does not exist`
            });
        }
        
        // Delete user
        UserModel.delete(id);
        
        res.status(200).json({
            success: true,
            message: `User with ID ${id} deleted successfully`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// ========================================
// EXPORT CONTROLLERS
// ========================================

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};