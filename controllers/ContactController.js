const Contact = require("../models/ContactModel.js");

const getContacts = async (req, res) => {
    try {
        const response = await Contact.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const getContactsById = async (req, res) => {
    try {
        const response = await Contact.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const createContacts = async (req, res) => {
    try {
        await Contact.create(req.body);
        res.status(201).json({ msg: "Contact Created" });
    } catch (error) {
        console.log(error.message);
    }
}

const updateContacts = async (req, res) => {
    try {
        await Contact.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Contact Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

const deleteContacts = async (req, res) => {
    try {
        await Contact.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Contact Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getContacts,
    getContactsById,
    createContacts,
    updateContacts,
    deleteContacts,
};