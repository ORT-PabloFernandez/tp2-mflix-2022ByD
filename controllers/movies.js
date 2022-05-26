const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovieById(movie_id){    
    return movies.getMovieById(movie_id);
}

async function getMoviesWithAtLeastOnePrice(pageSize, page) {
    return movies.getMoviesWithAtLeastOnePrice(pageSize, page);
}

async function getMoviesByLanguage(pageSize, page, language_id) {
    return movies.getMoviesByLanguage(pageSize, page, language_id);
}

module.exports = {getAllMovies, getMovieById, getMoviesWithAtLeastOnePrice, getMoviesByLanguage};