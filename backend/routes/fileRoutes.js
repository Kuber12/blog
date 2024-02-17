const express = require("express");
const upload = require("../middleware/imageUpload");
const router = express.Router();
const {
  uploadFile,
  deleteFile
} = require("../controllers/fileController");

router.use("/profile", express.static("uploads"));
router.post("/upload", upload.single('fileInput'), uploadFile);
router.delete("/:fileName/delete", deleteFile);

module.exports = router;
