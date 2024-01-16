const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const Like = require("../models/likeModel");
const mongoose = require('mongoose');

const getBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find();
  res.status(200).json({ message: blog });
});
const getBlogsByUsername = asyncHandler(async (req, res) => {
  const username = req.params.username;
  const blog = await Blog.find(({ username: username }));
  res.status(200).json({ message: blog });
});

const createBlog = asyncHandler(async (req, res) => {
  try {
    const { headline, content,tag,image } = req.body;
    if (!headline || !content) {
      return res.status(400).json({ message: "Please insert all params" });
    }

    const blog = await Blog.create({
      headline,
      content,
      tag,
      image,
      views: 0
    });

    res.status(201).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a blog", error: error.message });
  }
});

const getBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Increment the view count
    blog.views += 1;

    // Save the updated blog
    await blog.save();

    res.status(200).json({ message: blog });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: blog });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

const editBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    // const { headline, article } = req.body;

    if (!blog) {
      res.status(404).json({ message: req.params.id + " not found" });
      throw new Error("not found");
    } else {
      const editedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    }

    res.status(201).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a blog", error: error.message });
  }
});

const likeBlog = asyncHandler(async ( req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId("657c599cc885d4e6ae139b20");
    const blogId = new mongoose.Types.ObjectId(req.params.id);
    
    // Check if the combination of userId and blogId already exists
    const existingLike = await Like.findOne({ userId, blogId });
    
    if (existingLike) {
      await Like.deleteOne({ userId, blogId });
      res.status(204).json({message : "Like removed successfully"});
    }else{
      const newLike = new Like({ userId, blogId });
      const savedLike = await newLike.save();
      res.status(200).json({message : "Like inserted successfully"});
    }

  } catch (error) {
    console.error('Error inserting like:', error);
    res.status(500).json({message : "Error"});
  }
})
const countBlogLikes = asyncHandler(async (req,res) =>{
  try {
    const blogId = new mongoose.Types.ObjectId(req.params.id);
    const likesCount = await Like.countDocuments({blogId});
    res.status(200).json({totalLikes: likesCount});
  } catch (error) {
    res.status(500).json({error: "Blog not found"})
  }
})

module.exports = { getBlog, getBlogs, getBlogsByUsername, createBlog, deleteBlog, editBlog, likeBlog, countBlogLikes };
