const express = require("express");
const connectdb = require("./config/dbConnection");
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

connectdb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/blog",require("./routes/blogRoutes"));

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})