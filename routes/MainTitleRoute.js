const express = require("express");
const {
    getMainTitle,
    getMainTitleById,
    createMainTitle,
    updateMainTitle,
    deleteMainTitle
} = require("../controllers/MainTitleController.js");

const router = express.Router();

router.get('/main-titles', getMainTitle);
router.get('/main-titles/:id', getMainTitleById);
router.post('/main-titles', createMainTitle);
router.patch('/main-titles/:id', updateMainTitle);
router.delete('/main-titles/:id', deleteMainTitle);

module.exports = router;