import express from 'express';
import multer from 'multer';
import FileUploadController from '../controllers/FileUploadController.js';

const storage = multer.memoryStorage();

const router = express.Router();
const upload = multer({ storage: storage });

// File upload route
// router.post('/upload', upload.single('file'), FileUploadController.uploadFile);
router.post('/upload', upload.single("file"), FileUploadController.uploadFile);

// File download route
router.get('/download/:fileName', FileUploadController.downloadFile);

export default router;