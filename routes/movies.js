const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');



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

router.get('/moviesWin'), async (req, res) =>{
    try{
        res.json(await controller.getMoviesWin(cantidadGanadas));
    }catch(err){
        res.sendStatus(400).json(err)
    }
}




module.exports = router;