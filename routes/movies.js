const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getMovieById(req.params.id));
})

router.get('/awarded', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    res.json(await controller.getAwardedMovies());
})

router.get('/byLanguage/:language', async (req, res) =>{
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    res.json(await controller.getMoviesByLanguage(req.params.language, pageSize, page))
})

module.exports = router;