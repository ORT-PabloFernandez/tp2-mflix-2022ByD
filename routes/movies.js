const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getMovie(req.params.id));
});

router.get('/awards/movieByAwards', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    res.json(await controller.getMovieByAward(pageSize, page));
});

router.get('/languages/:language', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    res.json(await controller.getMovieByLanguage(req.params.language, pageSize, page));
});

router.get('/tomatoes/fresh', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    res.json(await controller.getMovieByTomatoes(pageSize, page));
});


module.exports = router;