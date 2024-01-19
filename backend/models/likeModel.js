const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  username:{
    type: String,
    ref: "Username"
  },
  blogId: {
    type: mongoose.Schema.ObjectId,
    ref: "Blog"
  },
});

module.exports = mongoose.model("Like", likeSchema);
