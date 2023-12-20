const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  headline: {
    type: String,
    required: [true,"Please enter a headline"],
  },
  content: {
    type: String,
    required: [true,"Please enter your content"],
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
  image: {
    type: Buffer,
    required: false,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }]
})

module.exports = mongoose.model("Blog",blogSchema);