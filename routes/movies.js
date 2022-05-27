const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers/movies');


router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    res.json(await controller.getAllMovies(pageSize, page));
});


// 1 - 

router.get('/:id', async (req, res) => {


    res.json(await controller.getMovie(req.params.id));
})




// 3- 

router.get('/languages/leng', async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(
    await controller.getMovieLenguage(req.query.languages, pageSize, page)
  );
});

// 4 - 

router.get('fresh',async(req,res) => {
    const movies = await controller.getMoviesPorTomatoes;
    res.json(movies);
})



module.exports = router;