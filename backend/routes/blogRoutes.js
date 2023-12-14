const express = require("express");
const blog = require("../models/blogModel");
const router = express.Router();

const {getBlogs,getBlog,createBlog,deleteBlog,editBlog} = require("../controllers/blogController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getBlog).delete(deleteBlog).put(editBlog);


module.exports = router
