const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:idMovie', async (req, res) => {    
    const movieId = req.params;
    res.json(await controller.getMovie(movieId));
});

router.get('/winners', async (req, res) => {    
    res.json(await controller.getMoviesWinners());
});

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const lenguage = req.query.lenguage ? parseInt(req.query.lenguage): '';
    res.json(await controller.getMoviesLenguage(pageSize, page, lenguage));
});

router.get('/ranking', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    res.json(await controller.getMoviesRanking(pageSize, page));
});



module.exports = router;