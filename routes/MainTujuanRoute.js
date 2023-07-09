import express from "express";
import {
    getMainTujuan, 
    getMainTujuanById,
    createMainTujuan,
    updateMainTujuan,
    deleteMainTujuan
} from "../controllers/MainTujuanController.js";

const router = express.Router();

router.get('/main-tujuans', getMainTujuan);
router.get('/main-tujuans/:idJudul', getMainTujuanById);
router.post('/main-tujuans', createMainTujuan);
router.patch('/main-tujuans/:id', updateMainTujuan);
router.delete('/main-tujuans/:id', deleteMainTujuan);

export default router;