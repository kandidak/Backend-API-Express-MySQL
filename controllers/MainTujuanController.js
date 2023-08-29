const MainTujuan = require("../models/MainTujuanModel.js");

const getMainTujuan = async (req, res) => {
    try {
        const response = await MainTujuan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const getMainTujuanById = async (req, res) => {
    try {
        const response = await MainTujuan.findAll({
            where: {
                idJudul: req.params.idJudul
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const createMainTujuan = async (req, res) => {
    try {
        await MainTujuan.create(req.body);
        res.status(201).json({ msg: "Tujuan Created" });
    } catch (error) {
        console.log(error.message);
    }
}

const updateMainTujuan = async (req, res) => {
    try {
        await MainTujuan.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Tujuan Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

const deleteMainTujuan = async (req, res) => {
    try {
        await MainTujuan.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Tujuan Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getMainTujuan,
    getMainTujuanById,
    createMainTujuan,
    updateMainTujuan,
    deleteMainTujuan,
};