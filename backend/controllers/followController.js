const asyncHandler = require("express-async-handler");
const Follow = require("../models/followModel");
const mongoose = require('mongoose');

const followUser = asyncHandler(async ( req, res) => {
  try {
    const follower = req.params.follower;
    const followed = req.params.followed;
    
    // Check if the combination of username and blogId already exists
    const existingFollow = await Follow.findOne({ username: follower, followedUser: followed });
    
    if (existingFollow) {
      await Follow.deleteOne({ username: follower, followedUser: followed });
      res.status(200).json({message : "Unfollowed"});
    }else{
      const newFollow = new Follow({ username: follower, followedUser: followed });
      const savedFollow = await newFollow.save();
      res.status(200).json({message :"Followed"});
    }

  } catch (error) {
    console.error('Error following:', error);
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

const checkFollowing = asyncHandler(async (req,res) =>{
  const follower = req.params.follower;
  const followed = req.params.followed;
  try {
    const isFollowing = await Follow.findOne({ username: follower, followedUser: followed });
    if(isFollowing){
      res.status(200).json({message: "Following"});
    }else{
      res.status(200).json({message: "Not Following"})
    }
  }catch(err){
    res.status(500).json({message: "Somthing went wrong"})
  }
})
module.exports = { followUser, countFollowers, checkFollowing};
