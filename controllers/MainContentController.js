import MainContent from "../models/MainContentModel.js";

export const getMainContent = async(req, res) =>{
    try {
        const response = await MainContent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMainContentByIdJudul = async(req, res) =>{
    try {
        const response = await MainContent.findAll({
            where:{
                idJudul: req.params.idJudul
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMainContentById = async(req, res) =>{
    try {
        const response = await MainContent.findOne({
            where:{
                idJudul: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMainContentByTitle = async(req, res) =>{
    try {
        const response = await MainContent.findAll({
            where:{
                main_title: req.params.main_title
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMainContent = async(req, res) =>{
    try {
        await MainContent.create(req.body);
        res.status(201).json({msg: "Content Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMainContent = async(req, res) =>{
    try {
        await MainContent.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Content Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMainContent = async(req, res) =>{
    try {
        await MainContent.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Content Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}