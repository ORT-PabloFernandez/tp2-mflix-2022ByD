const express = require("express");
const router = express.Router();
const controller = require("../controllers/movies");
const data = require(".././data/movies");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllMovies(pageSize, page));
});

router.get("/:id", async (req, res) => {
  const movie = await data.getMoviebyId(req.params.id);
  res.json(movie);
});

router.get("/wins/:wins", async (req, res) => {
  const movies = await data.getAwardWinningMovies(req.params.wins);
  res.json(movies);
});

router.get("/language/:language", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const movies = await data.getMoviesByLanguage(
    req.params.language,
    pageSize,
    page
  );
  res.json(movies);
});

module.exports = router;
