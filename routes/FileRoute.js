import express from 'express';
import { uploadFile, downloadFile } from '../controllers/FileController';

const router = express.Router();
const upload = require('../middlewares/upload');

// File upload route
router.post('/upload', upload.single('pdf_file'), uploadFile);

// File download route
router.get('/download/:fileId', downloadFile);

export default router;