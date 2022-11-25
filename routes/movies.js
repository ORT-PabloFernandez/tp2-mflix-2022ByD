const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});

router.get("/getMovie/:id", async(req, res) => {
    const idMovie = req.params.id;
    res.json(await controller.getAllMovies(idMovie))
});

router.get("/movieAward", async(req, res) => {
    const movies = await controller.getMovieAward();
});

router.get("/movieByIdom", async(req, res) => {
    const movies = await controller.getMovieByIdiom();
})

module.exports = router;