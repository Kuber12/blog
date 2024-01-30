const asyncHandler = require("express-async-handler");
const Tags = require("../models/tagModel");
const mongoose = require('mongoose');

const getTags = asyncHandler(async (req, res) => {
    const tags = await Tags.find()

    res.json({
        message: tags,
    });
});
module.exports = {getTags};
