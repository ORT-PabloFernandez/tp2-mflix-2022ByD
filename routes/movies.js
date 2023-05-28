const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');
const moviesDb = require('../data/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});


router.get('/:id', async (req, res) => {
    
    const pelicula = await moviesDb.getSingleMovie(req.params.id);
    res.json(pelicula);
    
});


router.get('/:year', async (req,res ) => {
    const peliculas = await moviesDb.mayoresDe(req.params.year);
    res.json(peliculas);
})


router.get('/special/withawards', async (req,res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    const peliculasGanadoras = await  moviesDb.getWinnerMovies(pageSize,page);
    //console.log(peliculasGanadoras);
    res.json(peliculasGanadoras);
    
});


router.get('/languages/:languages', async(req,res)=>{
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    const language = req.params.languages;

    const porLanguaje = await moviesDb.mooviesPorLanguaje(language,pageSize,page);
    res.json(porLanguaje);
})

router.get('/tomatoes/fresh/sorted', async (req,res) => {
    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const moovies = await moviesDb.getMoviesSortedByTomatoes(pageSize,page);

    res.json(moovies);
})



module.exports = router;