const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});

// Create a model for admin login using the schema
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
