const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/uploads'); // Destination folder where the file will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Set filename (you can adjust as needed)
    }
});
const upload = multer({ storage: storage });

module.exports = upload;