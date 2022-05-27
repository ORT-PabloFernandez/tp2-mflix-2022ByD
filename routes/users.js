const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', async (req, res) => {
  res.json(await controller.getAllUsers());
});

router.get('/:user_id', async (req, res) => {
  const user_id = req.params.user_id;
  res.json(await controller.getUserById(user_id));
});

module.exports = router;
