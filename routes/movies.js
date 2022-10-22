const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async(req, res) => {
    res.json(await controller.getMovie(req.params.id));
});

router.get('/winners/award', async(req, res) =>{
    res.json(await controller.getMoviesWithAwards());
});

router.get('/filter/language', async(req, res)=> {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const language = req.query.language;

    res.json(await controller.getMoviesByLanguage(pageSize,page,language));
});

router.get('/ranking/fresh', async(req, res)=>{
    res.json(await controller.getAllMoviesByFresh());
});

module.exports = router;