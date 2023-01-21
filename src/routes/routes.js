const exampleController = require('../controllers/example.controller');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Example Page');
});
router.get('/users', exampleController.index);

module.exports = router;