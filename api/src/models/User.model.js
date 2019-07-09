import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: false
    }
}, {timestamps: true});

// Hash password prior to saving the doc
userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema);