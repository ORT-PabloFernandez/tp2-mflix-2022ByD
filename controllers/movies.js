const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovieById(movie_id){    
    return movies.getMovieById(movie_id);
}

async function getMoviesWithAtLeastOnePrice(pageSize, page) {
    return movies.getMoviesWithAtLeastOnePrice(pageSize, page)
}

module.exports = {getAllMovies, getMovieById, getMoviesWithAtLeastOnePrice};