const express = require("express");
const router = express.Router();
const controller  = require("../controllers/movies");


router.get("/", async (req, res) => {
    const id= req.query.id ? req.query.id : "";
    res.json(await controller.getMovieFresh());

});

module.exports = router; 
