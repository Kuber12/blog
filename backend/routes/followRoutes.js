const express = require("express");
const follow = require("../models/followModel");
const router = express.Router();

const {
  followUser,
  countFollowers
} = require("../controllers/followController");
// const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.route("/:username/follow").post(followUser).get(countFollowers);

module.exports = router;