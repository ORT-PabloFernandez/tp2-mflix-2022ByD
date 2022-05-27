const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/getMovie/:id', async (req,res) => {
    let id = req.params.id;
    res.json(await controller.getMovie(id));
})

router.get('/getWins', async (req,res) => {
    res.json(await controller.getWins());
});

router.get('/getLenguage/:lenguage', async (req,res) => {
    let lenguage = req.params.lenguage;
    res.json(await controller.getLenguage(lenguage));
})

router.get('/getRanking', async (req,res) => {
    res.json(await controller.getRanking());
});

module.exports = router;