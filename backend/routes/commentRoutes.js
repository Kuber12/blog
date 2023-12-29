const express = require("express");
const comment = require("../models/commentModel");
const router = express.Router();

const {
  userComment
} = require("../controllers/commentController");
// const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.route("/:id").get(userComment);

module.exports = router;