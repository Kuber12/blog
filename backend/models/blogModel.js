const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  headline: {
    type: String,
    required: [true, "Please enter a headline"],
  },
  content: {
    type: String,
    required: [true, "Please enter your content"],
  },
  username: {
    type: String,
    required: false,
  },
  date_published: {
    type: Date,
    default: Date.now,
  },
  edited_status: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  views:{
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Blog", blogSchema);
