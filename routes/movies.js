const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/languaje/:languaje', async (req, res) => {
    try{
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;
        res.json(await controller.getMoviesLanguajes(req.params.languaje, pageSize, page));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/moviesWin/:number', async (req, res) => {
    try{
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;
        res.json(await controller.getMoviesWin(req.params.number, pageSize, page));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        res.json(await controller.getMoviesById(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/ordenTomatoes', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getOrdenTomatoes(pageSize, page));
});

module.exports = router;