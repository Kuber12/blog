const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const loginUser = asyncHandler(async (req,res) =>{
    res.json({message: "User Login"});
})

const registerUser = asyncHandler(async (req,res) =>{
    res.json({message: "Register Login"});
})

const currentUser = asyncHandler(async (req,res) =>{
    res.json({message: "Current User"});
})

module.exports = {loginUser, registerUser, currentUser};