const express = require("express");
const comment = require("../models/commentModel");
const router = express.Router();

const {
  userComment,
  getComments
} = require("../controllers/commentController");
// const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.route("/:id").post(userComment);
router.route("/:id").get(getComments);

module.exports = router;