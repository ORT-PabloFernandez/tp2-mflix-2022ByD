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


router.get('/ganadoras', async (req,res) => {
    const peliculasGanadoras = await  moviesDb.getWinnerMovies();
    res.json(peliculasGanadoras);
    
});



module.exports = router;