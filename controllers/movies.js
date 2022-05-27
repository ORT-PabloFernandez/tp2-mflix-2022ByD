const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMoviePorId(id){
    return movies.getMoviePorId(id);
}

async function getMoviesGanadoras(premios){
    return movies.getMoviesGanadoras(premios);
}

async function getPeliPorIdioma(idioma,pageSize, page){
    return movies.getPeliPorIdioma(idioma,pageSize, page);
}

async function getAllTomatoes(pageSize, page){
    return movies.getAllTomatoes(pageSize, page);
}
module.exports = {getAllMovies, getMoviePorId, getMoviesGanadoras,getPeliPorIdioma,getAllTomatoes};