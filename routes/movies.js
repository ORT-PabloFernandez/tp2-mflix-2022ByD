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
  res.json(await controller.getMoviePerId(id));
});

router.get("/winners/oneawardsplus", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getOneAwardsPlus(pageSize, page));
});

router.get("/language/:ln", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const ln = req.params.ln;
  res.json(await controller.getLenguageFilter(ln, pageSize, page));
});

router.get("/calification/descending", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getCalificationDesc(pageSize, page));
});

router.get("/users/comments/:id", async (req, res) => {
  const id = req.params.id;
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getUsersCommentsPerId( id, pageSize, page));
});
module.exports = router;
