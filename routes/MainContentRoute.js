const express = require("express");
const {
    getMainContent,
    getMainContentByIdJudul,
    getMainContentById,
    getMainContentByTitle,
    createMainContent,
    updateMainContent,
    deleteMainContent
} = require("../controllers/MainContentController.js");

const router = express.Router();

router.get('/main-contents', getMainContent);
router.get('/main-contents/:idJudul', getMainContentByIdJudul);
router.get('/main-contents/:id', getMainContentById);
router.get('/main-contents/:main_title', getMainContentByTitle);
router.post('/main-contents', createMainContent);
router.patch('/main-contents/:id', updateMainContent);
router.delete('/main-contents/:id', deleteMainContent);

module.exports = router;