const mongoose = require('mongoose');
const connectdb = async () =>{
    mongoose.connect('mongodb://localhost:27017/db_blog', {
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
