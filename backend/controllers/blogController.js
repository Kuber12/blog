const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

const getBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find();
  res.status(200).json({ message: blog });
});

const createBlog = asyncHandler(async (req, res) => {
  try {
    const { headline, content } = req.body;
    if (!headline || !content) {
      return res.status(400).json({ message: "Please insert all params" });
    }

    const blog = await Blog.create({
      headline,
      content,
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

module.exports = { getBlog, getBlogs, createBlog, deleteBlog, editBlog };
