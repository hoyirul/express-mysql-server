const exampleModel = require('../models/example.model');

const index = async (req, res) => {
    const [data] = await exampleModel.getAll();

    res.json({
        message: "success",
        data: data
    })
}

module.exports = {
    index, 
}