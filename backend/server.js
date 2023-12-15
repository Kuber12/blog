const express = require("express");
const connectdb = require("./config/dbConnection");
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

connectdb();
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/blog",require("./routes/blogRoutes"));
app.use("/api/user",require("./routes/userRoutes"));

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})