const exampleModel = require('../models/example.model');

const index = async (req, res) => {
    try{
        const [response] = await exampleModel.getAll();
        res.json({
            message: "success",
            data: response
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        })
    }
}

const store = async (req, res) => {
    const {body} = req;

    try{
        await exampleModel.insertData(body);
        res.status(201).json({
            message: "success",
            data: body
        });
    }catch(error){
        res.status(500).json({
            message: "errors",
            data: error
        })
    }
}

module.exports = {
    index, store
}