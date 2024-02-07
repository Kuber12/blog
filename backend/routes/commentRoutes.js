const express = require("express");
const comment = require("../models/commentModel");
const router = express.Router();

const {
  userComment,
  getComments
} = require("../controllers/commentController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/:id").get(getComments);
router.use(validateToken);
router.route("/:id").post(userComment);

module.exports = router;