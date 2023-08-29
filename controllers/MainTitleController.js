const MainContent = require("../models/MainContentModel.js");
const MainTitle = require("../models/MainTitleModel.js");
const MainTujuan = require("../models/MainTujuanModel.js");
const { UUID } = require("sequelize");

const getMainTitle = async (req, res) => {
  try {
    const response = await MainTitle.findAll({
      paranoid: false,
      include: [MainContent, MainTujuan],
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getMainTitleById = async (req, res) => {
  try {
    const response = await MainTitle.findOne({
      where: {
        id: req.params.id,
      },
      include: [MainContent, MainTujuan],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createMainTitle = async (req, res) => {
  try {
    const body = {
      ...req.body,
    };

    await MainTitle.create(body);
    res.status(201).json({ msg: "Title Created" });
  } catch (error) {
    console.log(error.message);
  }
};

const updateMainTitle = async (req, res) => {
  try {
    await MainTitle.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Title Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteMainTitle = async (req, res) => {
  try {
    const record = await MainTitle.findByPk(req.params.id);
    if (record) {
      await record.destroy();
    }
    // await MainTitle.destroy({
    //     where:{
    //         id: req.params.id
    //     }
    // });
    res.status(200).json({ msg: "Title Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getMainTitle,
  getMainTitleById,
  createMainTitle,
  updateMainTitle,
  deleteMainTitle,
};
