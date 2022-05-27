const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    const movie = await controller.getMovie(req.params.id);
    
    res.json(movie);
});

router.get('/prize/:prizeQty', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    const movies = await controller.getMovieMinPrized(req.params.prizeQty, pageSize, page);
    
    res.json(movies);
});

router.get('/language/:language', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    const movies = await controller.getMoviesByLanguage(req.params.language, pageSize, page);
    
    res.json(movies);
});

router.get('/puntaje/bypuntajes', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    const movies = await controller.getMoviesByPuntaje(pageSize, page);

    res.json(movies);
});

module.exports = router;