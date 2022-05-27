const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovieById(id){
    return movies.getMovieById(id);
}

async function getAwardedMovies(pageSize, page){
    return movies.getAwardedMovies(pageSize, page);
}

async function getMoviesByLanguage(language, pageSize, page){
    return movies.getMoviesByLanguage(language, pageSize, page)
}

module.exports = {
    getAllMovies, 
    getMovieById,
    getAwardedMovies,
    getMoviesByLanguage,
};