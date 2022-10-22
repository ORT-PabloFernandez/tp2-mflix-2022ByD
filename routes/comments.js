const express = require('express');
const router = express.Router();
const controller = require('../controllers/comments');

router.get('/user/:id', async(req, res) =>{
    res.json(await controller.getCommentsByUser(req.params.id));
});

module.exports = router;