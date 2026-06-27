// ========================================
// USER MODEL - MongoDB Schema
// ========================================

const mongoose = require('mongoose');

/**
 * User Schema Definition
 * Defines the structure of user documents in MongoDB
 */
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [50, 'Name cannot exceed 50 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please enter a valid email address'
            ]
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters']
        },
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: 'Role must be either user or admin'
            },
            default: 'user'
        },
        message: {
            type: String,
            maxlength: [500, 'Message cannot exceed 500 characters'],
            trim: true
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    }
);

// ========================================
// INDEXES FOR PERFORMANCE
// ========================================

// Create index on email for faster queries
userSchema.index({ email: 1 });

// ========================================
// INSTANCE METHODS
// ========================================

/**
 * Check if password matches (for future authentication)
 */
userSchema.methods.comparePassword = async function(candidatePassword) {
    // In production, use bcrypt to compare
    return this.password === candidatePassword;
};

/**
 * Get public profile (exclude sensitive data)
 */
userSchema.methods.getPublicProfile = function() {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
};

// ========================================
// STATIC METHODS
// ========================================

/**
 * Find user by email
 */
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email.toLowerCase() });
};

// ========================================
// CREATE MODEL
// ========================================

const User = mongoose.model('User', userSchema);

module.exports = User;