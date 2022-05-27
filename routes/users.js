var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/:id/comments', async (req, res) => {
  const id = req.params.id;
  const response = await controller.getUserComments(id, 10, 10)
  res.send(response);
});

module.exports = router;
