const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const Like = require("../models/likeModel");
const mongoose = require('mongoose');

const getBlogs = asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page) || 1;
  const limit = parseInt(req.params.limit) || 10;

  try {
    const totalBlogs = await Blog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await Blog.find()
        .sort({ date_published: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      res.status(200).json({
        message: blogs,
        totalPages,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});
const searchBlogs = asyncHandler(async (req, res) => {
  const query = req.query.query || '';
  const tag = req.query.tag || '';
  const sortby = req.query.sortby || 'date_published';
  const order = req.query.order || 'desc';
  const limit = req.query.limit || false;
  try {
    const matchConditions = {
      $and: [
        { 'headline': { $regex: new RegExp(query, 'i') } },
      ]
    };

    if (tag !== '') {
      matchConditions.$and = matchConditions.$and || [];
      matchConditions.$and.push({ 'tag': tag });
    }
    const aggregatePipeline = [
      { $match: matchConditions },
      {
        $facet: { 
          totalBlogs: [{ $count: 'count' }],
          blogs: [
            { $sort: { 
              [sortby]: order=="desc"?-1:1 } 
            },
          ],
        },
      },
    ];
    if (limit) {
      aggregatePipeline[1].$facet.blogs.push({ $limit: parseInt(limit, 10) }); // Conditionally add $limit using push
    }
    const [result] = await Blog.aggregate(aggregatePipeline);


    const blogs = result.blogs || [];

    res.status(200).json({
      message: blogs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

});
const getBlogsByUsername = asyncHandler(async (req, res) => {
  const username = req.params.username;
  const blog = await Blog.find(({ username: username }));
  res.status(200).json({ message: blog });
});
const getTopContributer = asyncHandler(async (req, res) => {
  try {
    const topContributor = await Blog.aggregate([
      {
        $group: {
          _id: "$username",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 1
      }
    ]);

    if (topContributor.length > 0) {
      const { _id: username, count: blogCount } = topContributor[0];
      res.status(200).json({ username, blogCount });
    } else {
      res.status(404).json({ message: "No blogs found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getBlogsByTagname = asyncHandler(async (req, res) => {
  const tag = req.params.tag;
  const blog = await Blog.find(({ tag: tag }));
  res.status(200).json({ message: blog });
});

const createBlog = asyncHandler(async (req, res) => {
  try {
    const { headline, content, tag, image, username } = req.body; 
    if (!headline || !content || !tag || !username) {
      return res.status(400).json({ message: "Please insert all params" });
    }

    const blog = await Blog.create({
      headline,
      content,
      tag,
      image,
      username,
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
    const {username} = req.body;
    const blogId = new mongoose.Types.ObjectId(req.params.id);
    
    // Check if the combination of username and blogId already exists
    const existingLike = await Like.findOne({ username, blogId });
    if (existingLike) {
      await Like.deleteOne({ username, blogId });
      res.status(200).json({message : "Like removed successfully"});
    }else{
      const newLike = new Like({ username, blogId });
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

module.exports = { getBlog, getBlogs, getBlogsByUsername,getBlogsByTagname,searchBlogs, createBlog, deleteBlog, editBlog, likeBlog, countBlogLikes,getTopContributer };
