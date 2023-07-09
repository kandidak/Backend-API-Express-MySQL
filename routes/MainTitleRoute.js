import express from "express";
import {
    getMainTitle, 
    getMainTitleById,
    createMainTitle,
    updateMainTitle,
    deleteMainTitle
} from "../controllers/MainTitleController.js";

const router = express.Router();

router.get('/main-titles', getMainTitle);
router.get('/main-titles/:id', getMainTitleById);
router.post('/main-titles', createMainTitle);
router.patch('/main-titles/:id', updateMainTitle);
router.delete('/main-titles/:id', deleteMainTitle);

export default router;