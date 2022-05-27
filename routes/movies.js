const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getMovieId(req.params.id));
});

router.get('/ganadoras/masPremios', async (req, res) => {   
    const minPremios = req.query.minPremios ? parseInt(req.query.minPremios): 0;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;     
    res.json(await controller.getGanadoras(minPremios, pageSize, page));
});

router.get('/filtradas/idioma', async (req, res) => {   
    const idioma = req.query.idioma ? req.query.idioma: "";
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;     
    res.json(await controller.getXIdioma(idioma, pageSize, page));
});

router.get('/ordenadas/fresh', async (req, res) => {   
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;     
    res.json(await controller.getOrdFresh(pageSize, page));
});

/* router.get('/ordenadas/fresh', async (req, res) => {   
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;     
    res.json(await controller.getOrdFresh(pageSize, page));
}); */

router.get('/comentarios/usuario', async (req, res) => { 
    const user = req.query.user ? req.query.user: "0";  
    res.json(await controller.getCome(user));
});

module.exports = router;