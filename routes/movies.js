const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:movie_id', async (req, res) => {    
    const movie_id = req.params.movie_id;
    res.json(await controller.getMovieById(movie_id));
});

router.get('/all/at_least_one_price', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getMoviesWithAtLeastOnePrice(pageSize, page));
});

router.get('/language/:language_id', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const language_id = req.params.language_id;
    
    res.json(await controller.getMoviesByLanguage(pageSize, page, language_id));
});

module.exports = router;