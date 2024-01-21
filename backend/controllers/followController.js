const asyncHandler = require("express-async-handler");
const Follow = require("../models/followModel");
const mongoose = require('mongoose');

const followUser = asyncHandler(async ( req, res) => {
  try {
    const {username} = req.body;
    const followedUser = req.params.username;
    
    // Check if the combination of username and blogId already exists
    const existingFollow = await Follow.findOne({ username, followedUser });
    
    if (existingFollow) {
      await Follow.deleteOne({ username, followedUser });
      res.status(200).json({message : "Unfollowed " + followedUser});
    }else{
      const newFollow = new Follow({ username, followedUser });
      const savedFollow = await newFollow.save();
      res.status(200).json({message : username + " Followed " + followedUser});
    }

  } catch (error) {
    console.error('Error inserting like:', error);
    res.status(500).json({message : "Error"});
  }
})

const countFollowers = asyncHandler(async (req,res) =>{
  try {
    const username = req.params.username;
    const followersCount = await Follow.countDocuments({username});
    res.status(200).json({totalFollowers: followersCount});
  } catch (error) {
    res.status(500).json({error: "Blog not found"})
  }
})

module.exports = { followUser, countFollowers};
