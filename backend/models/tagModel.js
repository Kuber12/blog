const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
    tagname:{
        type:String,
    }
})

module.exports = mongoose.model("Tag",tagSchema);