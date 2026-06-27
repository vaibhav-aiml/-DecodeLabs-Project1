// ========================================
// USER CONTROLLER - MongoDB Version
// ========================================

const User = require('../models/User');

// ========================================
// GET ALL USERS
// ========================================

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        console.error('Get all users error:', error);
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

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: `User with ID ${req.params.id} does not exist`
            });
        }
        
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error('Get user by ID error:', error);
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

const createUser = async (req, res) => {
    try {
        const { name, email, password, role, message } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'Duplicate Error',
                message: 'User with this email already exists'
            });
        }
        
        // Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password,
            role: role || 'user',
            message
        });
        
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: userResponse
        });
    } catch (error) {
        console.error('Create user error:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({
                success: false,
                error: 'Validation Error',
                errors: errors
            });
        }
        
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

const updateUser = async (req, res) => {
    try {
        const { name, email, password, role, message } = req.body;
        const userId = req.params.id;
        
        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: `User with ID ${userId} does not exist`
            });
        }
        
        // Check if email is taken by another user
        if (email && email !== existingUser.email) {
            const emailTaken = await User.findOne({ email: email.toLowerCase() });
            if (emailTaken) {
                return res.status(400).json({
                    success: false,
                    error: 'Duplicate Error',
                    message: 'Email is already taken by another user'
                });
            }
        }
        
        // Build update object
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email.toLowerCase();
        if (password) updateData.password = password;
        if (role) updateData.role = role;
        if (message) updateData.message = message;
        
        // Update user
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        ).select('-password');
        
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        console.error('Update user error:', error);
        
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({
                success: false,
                error: 'Validation Error',
                errors: errors
            });
        }
        
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

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: `User with ID ${userId} does not exist`
            });
        }
        
        // Delete user
        await User.findByIdAndDelete(userId);
        
        res.status(200).json({
            success: true,
            message: `User with ID ${userId} deleted successfully`
        });
    } catch (error) {
        console.error('Delete user error:', error);
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