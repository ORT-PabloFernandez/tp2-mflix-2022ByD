const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getPorId(id){
    return movies.getPorId(id);
}

async function getGanadoras(cant){
    return movies.getGanadoras(cant);
}

async function getPorIdioma(idioma, pageSize, page){
    return movies.getPorIdioma(idioma, pageSize, page);
}

async function puntajeTomatoes(){
    return movies.puntajeTomatoes();
}

module.exports = {getAllMovies, getPorId, getGanadoras, getPorIdioma, puntajeTomatoes};