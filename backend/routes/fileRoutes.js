const express = require("express");
const upload = require("../middleware/imageUpload");
const router = express.Router();
const {
  uploadFile,
  deleteFile
} = require("../controllers/fileController");

router.post("/upload", upload.single('fileInput'), uploadFile);
router.post("/delete", deleteFile);

module.exports = router;
