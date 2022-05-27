const express = require('express');
const router = express.Router();
const controller = require('../controllers/');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log('checkl');
  res.json(await controller.getAllUsers());
});

router.get('/:user_id', async function(req, res, next) {
  console.log('checkl');
  const user_id = req.params.user_id;
  res.json(await controller.getUserById(user_id));
});

module.exports = router;
