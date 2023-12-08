const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());
// app.use("/","../frontend/src/index.js")

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})