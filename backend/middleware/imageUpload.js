const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/uploads'); // Destination folder where the file will be stored
    },
    filename: function (req, file, cb) {
        const newFileName = Date.now();
        req.generatedFileName = newFileName;
        cb(null, newFileName);
    }
});
const upload = multer({ storage: storage });

module.exports = upload;