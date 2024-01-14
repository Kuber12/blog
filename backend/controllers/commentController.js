const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");
const mongoose = require('mongoose');

const userComment = asyncHandler(async ( req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userid);
    const blogId = new mongoose.Types.ObjectId(req.params.id);
    const text = "asdfasdf";
    
    if(!userId || !blogId || !text){
      return res.status(400).json({ message: "Please insert all params" });
    }else{
      const comment = await Comment.create({
        userId, blogId ,text
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

module.exports = {userComment};
