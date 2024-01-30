const express = require("express");
const connectdb = require("./config/dbConnection");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;

connectdb();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/user", require("./routes/userRoutes"),require("./routes/followRoutes"));
app.use("/api/comment", require("./routes/commentRoutes"));
app.use("/api/file", require("./routes/fileRoutes"));
app.use("/api/newsletter", require("./routes/emailRoutes"));
app.use("/api/tag", require("./routes/tagRoutes"));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
