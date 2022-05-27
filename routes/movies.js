const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});


router.get('/:id', async (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id;
    const movie = await controller.getMovie(id);

    res.json(movie);
    
})

router.get('/winners/:awards', async (req, res) => {
    //console.log(req.params.awards)
    const awards = req.params.awards;
    const movies = await controller.getWinners(awards);
    
    res.json(movies);
})


router.get('/bylanguage/:language', async (req, res) => {
    const language = req.params.language;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    const movies = await controller.getMoviesByLanguage(language,pageSize,page);

    res.json(movies);
})

router.get('/ranked/all', async (req, res)=> {
    const movies = await controller.getRankedMovies();

    res.json(movies);
})

module.exports = router;
