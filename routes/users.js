var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', async (req, res) => {
  res.json(await controller.getAllUsers());
})

router.get('/:id', async (req, res) => {
  res.json(await controller.getUserById(req.params.id));
})

module.exports = router;
