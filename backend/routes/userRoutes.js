const express = require("express");
const router = express.Router();
const {loginUser,registerUser, currentUser} = require("../controllers/userController");

router.post("/login",loginUser);
router.post("/register",registerUser);
router.get("/current",currentUser);

module.exports = router;