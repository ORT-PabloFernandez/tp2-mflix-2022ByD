const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    try{
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;
        
        res.json(await controller.getAllMovies(pageSize, page));

    }catch(error){
        res.status(400).json(error.message)
    }
});

router.get('/:id', async (req, res) =>{
    try{
        const id = req.params.id

        res.json(await controller.getOneMovie(id))

    }catch(error){
        res.status(400).json(error.message)
    }
})

router.get('/find/awarded/', async (req, res) => {
    try{
        const min = req.query.min ? parseInt(req.query.min) : 1;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;
    
        res.json( await controller.getAwardedMovies(min, pageSize, page))
    }catch(error){
        res.status(400).json(error.message)
    }
})

router.get('/find/lang/', async (req, res) => {
    try{
        const lang = req.query.lang ? req.query.lang : "English";
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;

        res.json( await controller.getFilteredByLang(pageSize, page, lang))
    }catch(error){
        res.status(400).json(error.message)
    }
})

router.get('/sort/fresh/', async (req, res) => {
    try{
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
        const page = req.query.page ? parseInt(req.query.page): 0;

        res.json( await controller.getSortedByFresh(pageSize, page))
    }catch(error){
        res.status(400).json(error.message)
    }
})


module.exports = router;

