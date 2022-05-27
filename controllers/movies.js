const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getById(id){    
    return movies.getById(id);
}

async function getOneAwards(){    
    return movies.getOneAwards();
}

async function getPorIdioma(idioma, pageSize, page){    
    return movies.getPorIdioma(idioma, pageSize, page);
}

async function getOrdenadasPorPunjate(orden, pageSize, page){    
    return movies.getOrdenadasPorPunjate(orden, pageSize, page);
}
module.exports = {getAllMovies, getById, getOneAwards, getPorIdioma, getOrdenadasPorPunjate};