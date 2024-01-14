const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  blogId: {
    type: mongoose.Schema.ObjectId,
    ref: "Blog"
  },
});

module.exports = mongoose.model("Like", likeSchema);
