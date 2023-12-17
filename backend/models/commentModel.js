const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        text: { 
            type: String, 
            required: [true,"Please enter a comment"] 
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        blog: {
            type: mongoose.Schema.ObjectId,
            ref: "Blog"
        },
        commentedAt: {
            date: {
              type: Date,
              default: Date.now,
            },
            time: {
              type: String,
              default: Time.now,
            },
        },
    }
);

module.exports = mongoose.model("Comment", commentSchema);