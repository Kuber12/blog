const asyncHandler = require("express-async-handler");

const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const fileName = req.file.originalname;
    // File was uploaded successfully
    res.status(200).send('File uploaded!')   
};

module.exports = {uploadFile};
