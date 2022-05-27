const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){    
    return movies.getMovie(id);
}

async function getMovieMinPrized(prizeQty, pageSize, page){    
    return movies.getMovieMinPrized(prizeQty, pageSize, page);
}

async function getMoviesByLanguage(language, pageSize, page){    
    return movies.getMoviesByLanguage(language, pageSize, page);
}

async function getMoviesByPuntaje(pageSize, page){    
    return movies.getMoviesByPuntaje(pageSize, page);
}

module.exports = {getAllMovies, getMovie, getMovieMinPrized, getMoviesByLanguage, getMoviesByPuntaje};