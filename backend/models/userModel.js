const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter a username"]
    },
    name: {
        type: String,   
        required: [true,"Please enter your name"]
    },
    password: {
        type: String,
        required: [true,"Please enter your password"]
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: false
    },
    email: {
        type: String,
        required: false
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