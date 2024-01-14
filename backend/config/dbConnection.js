const mongoose = require('mongoose');
require('dotenv').config();
const connectdb = async () =>{
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

module.exports = connectdb
