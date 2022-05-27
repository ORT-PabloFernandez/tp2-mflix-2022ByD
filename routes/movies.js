const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/find/awarded/', async (req, res) => {
    const min = req.query.min ? parseInt(req.query.min) : 1;

    res.json( await controller.getAwardedMovies(min))
})

router.get('/find/lang/', async (req, res) => {
    const lang = req.query.lang ? req.query.lang : "English";
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    res.json( await controller.getFilteredByLang(pageSize, page, lang))
})

router.get('/sort/fresh/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    res.json( await controller.getSortedByFresh(pageSize, page))
})

router.get('/:id', async (req, res) =>{
	const id = req.params.id
	res.json(await controller.getOneMovie(id))
})

module.exports = router;

