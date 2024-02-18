const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter a username"],
        unique: [true, "Username already used"]
    },
    bio:{
        type: String,
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
    gender: {
        type: String,
        enum: ['male', 'female','other'],
        required: false
    },
    userImage: {
        type: String,
        required: false
    },
    address:{
        type:String,
        required: false
    },
})

module.exports = mongoose.model("User",userSchema);