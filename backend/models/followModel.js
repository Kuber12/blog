const mongoose = require("mongoose");

const followSchema = mongoose.Schema({
  username:{
    type:String,
    required: [true,"Enter a username"]
  },
  followedUser: {
    type:String,
    required: [true,"Enter follow username"]
  },
});

module.exports = mongoose.model("Follow", followSchema);
