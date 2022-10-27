const express = require("express");
const router = express.Router();
const controller  = require("../controllers/movies");

//esto esta ruta que me devuelve una pelicula por id
router.get("/", async (req, res) => {
    const id= req.query.id ? req.query.id : "";
    res.json(await controller.getMovieByID(id));

});

module.exports = router; 

