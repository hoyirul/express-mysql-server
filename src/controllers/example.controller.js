const exampleModel = require('../models/example.model');

const index = async (req, res) => {
    try{
        const [response] = await exampleModel.all();
        res.json({
            message: "success",
            data: response
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        });
    }
}

const store = async (req, res) => {
    const {body} = req;

    try{
        await exampleModel.create(body);
        res.status(201).json({
            message: "success",
            data: body
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        });
    }
}

const show = async (req, res) => {
    const {id} = req.params;
    try{
        const [response] = await exampleModel.find(id);
        res.json({
            message: "success",
            data: response
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        });
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try{
        await exampleModel.update(body, id);
        res.status(200).json({
            message: "success",
            data: body
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        });
    }
}

const destroy = async (req, res) => {
    const {id} = req.params;

    try{
        await exampleModel.destroy(id);
        res.status(200).json({
            message: "success deleted!",
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        });
    }
}

module.exports = {
    index, store, show, update, destroy
}