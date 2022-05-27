const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    res.json(await controller.getAllMovies(pageSize, page));
});

// API PELICULAS CON AL MENOS 1 PREMIO
router.get('/oneAwards/', async (req, res) => {
    res.json(await controller.getOneAwards());
})

// API PELICULAS FILTRADAS POR IDIOMA
router.get('/porIdioma/:idioma', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    res.json(await controller.getPorIdioma(req.params.idioma, pageSize, page));
})


// API PELICULAS ORDENADAS POR PUNTAJE FRESH
router.get('/porPuntaje/:orden', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    res.json(await controller.getOrdenadasPorPunjate(req.params.orden, pageSize, page));
})

// API POR ID
router.get('/:id', async (req, res) => {
    res.json(await controller.getById(req.params.id));
})

module.exports = router;