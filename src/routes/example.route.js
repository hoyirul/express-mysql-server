const exampleController = require('../controllers/example.controller');

const router = require('express').Router();

// route users
router.get('/users', exampleController.index);
router.post('/users', exampleController.store);
router.put('/users/:id', exampleController.update);
router.delete('/users/:id', exampleController.destroy);

module.exports = router;