const express = require("express");
const follow = require("../models/followModel");
const router = express.Router();

const {
  followUser,
  countFollowers,
  checkFollowing
} = require("../controllers/followController");
// const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.route("/:follower/follow/:followed").post(followUser).get(checkFollowing);
router.route("/:username/follow/").get(countFollowers);

module.exports = router;