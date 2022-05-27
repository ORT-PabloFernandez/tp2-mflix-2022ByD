const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    const movies = await controller.getMovies(req.params.id);
    res.json(movies);
 });

 router.get('/getMoviesWin/win', async (req, res) => {
    res.json(await controller.getMoviesWin());
 });

 router.get('/getMoviesIdioma/:languages', async (req, res) => {
     let languages = req.params.languages
    res.json(await controller.getMoviesIdioma(languages));
 });

 router.get('/getMoviesFresh/fresh', async (req, res) => {
   res.json(await controller.getMoviesFresh());
});

 


module.exports = router;