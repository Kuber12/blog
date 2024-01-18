const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");
const mongoose = require('mongoose');

const getComments = asyncHandler(async (req,res) =>{
  const comments = await Comment.find({blogId: req.params.id});
  res.status(200).json({
    message: comments
  })
})

const userComment = asyncHandler(async ( req, res) => {
  try {
    const userName = "username";
    const blogId = new mongoose.Types.ObjectId(req.params.id);
    const {text} = req.body;
    if(!userName){
      return res.status(400).json({ message: "Please login first" });
    }
    if(!userName || !blogId || !text){
      return res.status(400).json({ message: "Please insert all params" });
    }else{
      const comment = await Comment.create({
        userName, blogId ,text
      });
      res.status(200).json(
        {
          message : "Commented successfully",
        }
      );
    }
    
  } catch (error) {
    console.error('Error inserting like:', error);
    res.status(500).json({message : "Error"});
  }
})

module.exports = {userComment, getComments};
