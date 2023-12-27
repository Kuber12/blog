const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter a username"],
        unique: [true, "Username already used"]
    },
    name: {
        type: String,   
        required: [true,"Please enter your name"]
    },
    password: {
        type: String,
        required: [true,"Please enter your password"],
    },
    dob: {
        type: Date,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: [true, "Email already used"]
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("User",userSchema);