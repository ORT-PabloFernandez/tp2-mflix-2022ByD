const express = require("express");
const router = express.Router();
const controller  = require("../controllers/movies");


router.get("/", async (req, res) => {
    const languages= req.query.languages ? req.query.languages : "";
    res.json(await controller.getMovieByLanguages(languages));

});

module.exports = router; 
