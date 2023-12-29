const express = require("express");
const follow = require("../models/followModel");
const router = express.Router();

const {
  followUser
} = require("../controllers/followController");
// const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.route("/:id/follow").post(followUser);

module.exports = router;