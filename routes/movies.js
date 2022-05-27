const express = require("express");
const router = express.Router();
const controller = require("../controllers/movies");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllMovies(pageSize, page));
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await controller.getAllMoviesPorID(id));
});

router.get("/ganadoras/ganadoras", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getAllMoviesGanadoras(pageSize, page));
});
router.get("/porIdioma/:idioma", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const idioma = req.params.idioma;
  res.json(await controller.getAllMoviesPorIdioma(idioma, pageSize, page));
});

router.get("/porFresh/descendente", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getAllMoviesPorfresh(pageSize, page));
});

module.exports = router;
