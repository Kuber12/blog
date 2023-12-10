const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  date_published: {
    type: Date,
    default: Date.now
  },
  edited_status: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    required: false,
  },
  image_url: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model("Blog",blogSchema);