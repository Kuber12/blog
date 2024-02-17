const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Destination folder where the file will be stored
    },
    filename: function (req, file, cb) {
        const originalname = file.originalname;
        const extension = originalname.split('.').pop(); // Get the file extension
        const newFileName = Date.now() + '.' + extension;
        
        req.generatedFileName = newFileName;
        cb(null, newFileName);
    }
});
const upload = multer({ storage: storage });

module.exports = upload;