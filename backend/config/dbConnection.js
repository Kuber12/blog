const mongoose = require('mongoose');
require('dotenv').config();
const connectdb = async () =>{
    mongoose.connect('mongodb+srv://kuber:qwerty12@blogsite.1vuke1d.mongodb.net', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
}

module.exports = connectdb
