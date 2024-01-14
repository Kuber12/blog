const mongoose = require("mongoose");

const followSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  followedUserId: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
});

module.exports = mongoose.model("Follow", followSchema);
