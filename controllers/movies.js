const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovieById(movie_id){    
    return movies.getMovieById(movie_id);
}

module.exports = {getAllMovies, getMovieById};