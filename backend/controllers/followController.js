const asyncHandler = require("express-async-handler");
const Follow = require("../models/followModel");
const mongoose = require('mongoose');

const followUser = asyncHandler(async ( req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userid);
    const followedUserId = new mongoose.Types.ObjectId(req.params.followedid);
    
    // Check if the combination of userId and blogId already exists
    const existingFollow = await Follow.findOne({ userId, followedUserId });
    
    if (existingFollow) {
      await Follow.deleteOne({ userId, followedUserId });
      res.status(204).json({message : "Unfollowed " + followedUserId});
    }else{
      const newFollow = new Follow({ userId, followedUserId });
      const savedLike = await newFollow.save();
      res.status(200).json({message : userId + " Followed " + followedUserId});
    }

  } catch (error) {
    console.error('Error inserting like:', error);
    res.status(500).json({message : "Error"});
  }
})

module.exports = { followUser};
