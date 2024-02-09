const express = require("express");
const router = express.Router();

const {
    sendMail
} = require("../controllers/emailController");

router.route("/:email").post(sendMail);

module.exports = router;