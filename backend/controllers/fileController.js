const asyncHandler = require("express-async-handler");

const uploadFile = (req, res) => {
    try{
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const fileName = req.generatedFileName;
        // File was uploaded successfully
        res.status(200).json({fileName})
    }catch(error){
        res.status(500).send('An error occurred');
    }
};

module.exports = {uploadFile};