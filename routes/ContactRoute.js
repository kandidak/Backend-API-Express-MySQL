const express = require("express");
const {
    getContacts,
    getContactsById,
    createContacts,
    updateContacts,
    deleteContacts
} = require("../controllers/ContactController.js");

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactsById);
router.post('/contacts', createContacts);
router.patch('/contacts/:id', updateContacts);
router.delete('/contacts/:id', deleteContacts);

module.exports = router;