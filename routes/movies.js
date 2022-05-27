const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});



router.get('/winers/1', async (req, res) => {    
    
    res.json(await controller.getWinerMovies());
});

router.get('/language/:language', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const language = req.params.language;
    
    res.json(await controller.getAllMoviesByLanguage(language, pageSize, page));
});

router.get('/tomatoes', async (req, res) => {   
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0; 
    const movies = await controller.getAllMoviesByTomatoes(pageSize, page);
    
    res.json(movies);
});

router.get('/:id', async (req, res) => {
    const movie = await controller.getMovie(req.params.id);
    res.json(movie);
});


module.exports = router;