const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const movie = await controller.getMovieById(id);
    res.json(movie)
})

router.get('/special/withawards', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const movies = await controller.getMoviesWithAwards(pageSize, page);
    res.json(movies)
})

router.get('/tomatoes/fresh/sorted', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const movies = await controller.getMoviesSortedByTomatoes(pageSize, page);
    res.json(movies)
})

router.get('/language/:language', async (req, res) => {
    const language = req.params.language;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const movies = await controller.getMoviesByLanguage(language, pageSize, page);
    res.json(movies)
})



module.exports = router;