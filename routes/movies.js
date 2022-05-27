const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllMovies(pageSize, page));
});

router.get('/awards/greatherThanOne', async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getMoviesWithAwardThanMoreOne(pageSize, page));
});

router.get('/languages', async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const lenguage = req.query.lenguage;

  res.json(await controller.getMoviesByLanguage(lenguage, pageSize, page));
});

router.get('/sort/fresh', async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getMoviesByScoreFresh(pageSize, page));
});

router.get('/:movieId', async (req, res) => {
  const movieId = req.params.movieId;

  res.json(await controller.getMovieById(movieId));
});

module.exports = router;
