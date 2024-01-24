const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema({
  email:{
    type: String
  }
});

module.exports = mongoose.model("Newsletter", newsletterSchema);
