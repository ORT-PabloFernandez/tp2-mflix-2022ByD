const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers/movies');




router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/:id', async (req, res) => {
    const movie = await controller.getOneMovie(req.params.id);
    res.json(movie);
})

router.get('/wins/:wins', async(req,res) =>{
    const wins = await controller.getMoviesWins(req.params.wins);
    res.json(wins);
})

router.get('/languages/:languages', async (req,res) => {
    const lenguage = await controller.getMoviesLanguage(req.params.languages);
    res.json(lenguage);
})

router.get('/fresh/:fresh', async (req,res) =>{
    const fresh = await controller.getFresh(req.params.fresh);
    res.json(fresh);
})

module.exports = router;