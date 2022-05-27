const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    const movie = await controller.getMoviePorId(req.params.id);
    res.json(movie);
})

router.get('/ganadoras/:cantPremiosmMinimos', async (req, res) => {
    const movieganadora = await controller.getMoviesGanadoras(req.params.cantPremiosmMinimos);
    res.json(movieganadora)
})

router.get('/porIdioma/:idioma', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    const peliporidioma = await controller.getPeliPorIdioma(req.params.idioma,pageSize,page);
    res.json(peliporidioma);
})

router.get('/tomatoes', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    res.json(await controller.getAllTomatoes(pageSize,page));
})

module.exports = router;