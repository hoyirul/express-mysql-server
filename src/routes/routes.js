const exampleController = require('../controllers/example.controller');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Example Page');
});

module.exports = router;