var express = require('express');
var router = express.Router();
const controller = require('../controllers/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('checkl');
  res.json(await controller.getAllUsers());
});

router.get('/:user_id', function(req, res, next) {
  console.log('checkl');
  const user_id = req.params.user_id;
  res.json(await controller.getUserById(user_id));
});

module.exports = router;
