const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMoviesById(id){    
    return movies.getMoviesById(id);
}

async function getMoviesWin(id){    
    return movies.getMoviesByWin(id);
}


module.exports = {getAllMovies, getMoviesById, getMoviesWin};