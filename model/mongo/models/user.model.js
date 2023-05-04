const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: null,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    phone: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;