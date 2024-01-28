const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        text: { 
            type: String, 
            required: [true,"Comment cant be Empty"] 
        },
        username: {
            type: String, 
            required: [true,"Please login first"] 
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