const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

/* GET users listing. */
router.get('/', async (req, res) => {  
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
  const page = req.query.page ? parseInt(req.query.page): 0;  
  res.json(await controller.getAllComments(pageSize, page));
});

router.get('/porUsuario/usuario', async (req, res) => {  
  const user = req.query.user ? req.query.user: "0"; 
  res.json(await controller.getCommentsByUser(user));
});





module.exports = router;