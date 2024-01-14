const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        text: { 
            type: String, 
            required: [true,"Please enter a comment"] 
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        blogId: {
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
                default: new Date().toLocaleTimeString(),
            },
        },
    }
);

module.exports = mongoose.model("Comment", commentSchema);