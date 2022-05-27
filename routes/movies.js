const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/porId/:id', async (req, res) => {
    res.json(await controller.getPorId(req.params.id));
});

router.get('/ganadoras/:cant', async (req, res) => {
    res.json(await controller.getGanadoras(req.params.cant));
});

router.get('/porIdioma/:idioma', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    res.json(await controller.getPorIdioma(req.params.idioma, pageSize, page));
});

router.get('/puntaje/tomatoes', async (req, res) => {
    res.json( await controller.puntajeTomatoes());
});

module.exports = router;