const express = require("express");
const blog = require("../models/blogModel");
const router = express.Router();

const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  editBlog,
  likeBlog,
  countBlogLikes,
  getBlogsByUsername
} = require("../controllers/blogController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/").get(getBlogs)
router.route("/:username/user").get(getBlogsByUsername);
router.route("/:id").get(getBlog)
router.use(validateToken);
router.route("/").post(createBlog);
router.route("/:id/like").post(likeBlog).get(countBlogLikes);
router.route("/:id").delete(deleteBlog).put(editBlog);

module.exports = router;