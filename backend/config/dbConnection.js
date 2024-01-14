const mongoose = require('mongoose');
require('dotenv').config();
const connectdb = async () =>{
  try {
    await mongoose.connect('mongodb+srv://kuber:qwerty12@blogsite.1vuke1d.mongodb.net/blogs');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

module.exports = connectdb
