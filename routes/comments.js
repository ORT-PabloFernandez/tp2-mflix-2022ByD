const express = require('express');
const router = express.Router();
const controller = require('../controllers/comments');

/* GET users listing. */
router.get('/', async (req, res) => {
  res.json(await controller.getAllComments());
});

module.exports = router;