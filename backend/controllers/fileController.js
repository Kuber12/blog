const asyncHandler = require("express-async-handler");
const fs = require('fs');
const path = require('path');
const staticFolder = '../frontend/public/uploads';

const uploadFile = (req, res) => {
    try{
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const fileName = req.generatedFileName;
        // File was uploaded successfully
        res.status(200).json({url : `https://blog-backend-3dcg.onrender.com/api/file/profile/${req.file.filename}`})
    }catch(error){
        res.status(500).send('An error occurred');
    }
};
const deleteFile = (req,res) => {
    const fileNameToDelete = req.params.fileName;
    if(!fileNameToDelete){
        res.status(500).send('File doesnt exist.');
    }
    const filePathToDelete = path.join(staticFolder, fileNameToDelete);

    // Check if the file exists before attempting to delete it
    fs.access(filePathToDelete, fs.constants.F_OK, (err) => {
        if (err) {
        res.status(404).send('File not found');
        return;
        }

        // File exists, proceed with deletion
        fs.unlink(filePathToDelete, (err) => {
        if (err) {
            res.status(500).send('Error deleting the file');
            return;
        }
        res.send('File deleted successfully');
        });
    });
}

module.exports = {uploadFile,deleteFile};