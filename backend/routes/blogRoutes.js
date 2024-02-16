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
  getBlogsByUsername,
  getBlogsByTagname,
  searchBlogs,
  getTopContributer
} = require("../controllers/blogController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/:page(\\d+)?/:limit(\\d+)?").get(getBlogs);
router.route("/search/:page(\\d+)?/:limit(\\d+)?").get(searchBlogs);
router.route("/topcontributor").get(getTopContributer);
router.route("/:id").get(getBlog);
router.route("/:username/user").get(getBlogsByUsername);
router.route("/:tag/tag").get(getBlogsByTagname);
router.route("/:id/like").get(countBlogLikes);
router.use(validateToken);
router.route("/").post(createBlog);
router.route("/:id").delete(deleteBlog).put(editBlog);
router.route("/:id/like").post(likeBlog);

module.exports = router;