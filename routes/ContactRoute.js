import express from "express";
import {
    getContacts, 
    getContactsById,
    createContacts,
    updateContacts,
    deleteContacts
} from "../controllers/ContactController.js";

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactsById);
router.post('/contacts', createContacts);
router.patch('/contacts/:id', updateContacts);
router.delete('/contacts/:id', deleteContacts);

export default router;