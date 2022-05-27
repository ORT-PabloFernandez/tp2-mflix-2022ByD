const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

router.get('/', async (req, res) => {    
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllMovies(pageSize, page));
});


//2. Los desarrolladores de frontend estan haciendo un pantalla para mostrar solo las películas ganadoras de al menos un premio. Necesitamos que desarrolles el endpoint respectivo. Solo necesitan el titulo, el poster y el resumen de la reseña (plot)
router.get('/awards/:aw', async (req, res) => {
       res.json(await controller.getMovieAwards(parseInt(req.params.aw)));
})

//3. Necesitamos un endpoint que nos devuelva las peliculas filtradas por idioma. Toma en cuenta que estas películas pueden ser muchas y el desarrollador de frontend va mostrarlas paginadas.
router.get('/languages/:language', async (req, res) => {
    const language = req.params.language;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    

    res.json(await controller.getMovieXLanguage(pageSize, page, language));
})

//4. Hay un calificación propia de las peliculas denomidada tomatoes la base de datos de peliculas actual solo otorga el puntaje fresh en determinadas condiciones (no interesa en este caso). El equipo de frontend esta desarrollando un ranking basado en esta calificación. Te piden desarrollar un endpoint que devuelva las películas ordenadas de mayor a menor considerando el puntaje fresh
router.get('/ranking', async (req, res) => {
    res.json(await controller.getMovieRanking());
})

//1. Necesitamos un endpoint que nos devuelva una película (movie) particular por _id

router.get('/:id', async (req, res) => {
    res.json(await controller.getMoviesXId(req.params.id));
})



module.exports = router;