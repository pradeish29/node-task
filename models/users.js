const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    AID: {
        type: Number,
        unique: true,
        required: [true, "AID is required"] 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    zone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
}, { timestamps: true }); 

const User = mongoose.model("User", userSchema);
module.exports = User;
