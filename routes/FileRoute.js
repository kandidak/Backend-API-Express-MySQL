const express = require('express');
const multer = require('multer');
const FileController = require('../controllers/FileController.js');

const storage = multer.memoryStorage();

const router = express.Router();
const upload = multer({ storage: storage });

// File upload route
// router.post('/upload', upload.single('file'), FileUploadController.uploadFile);
router.post('/upload', upload.single("file"), FileController.uploadFile);

// File download route
router.get('/download/:fileName', FileController.downloadFile);

module.exports = router;