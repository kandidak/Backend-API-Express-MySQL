const express = require('express');
const multer = require('multer');
const FileController = require('../controllers/FileController.js');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/inetpub/wwwroot/dhifarindo/files');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// File upload route
router.post('/upload', upload.single("file"), FileController.uploadFile);

// File download route
router.get('/download/:fileName', FileController.downloadFile);

module.exports = router;