const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){
    return movies.getMovie(id);
}

async function getMoviesWithAwards(){
    return movies.getMovieWithAwards();
}

async function getMoviesByLanguage(pageSize, page, language){
    return movies.getAllMoviesByLanguage(pageSize,page,language)
}

async function getAllMoviesByFresh(){
    return movies.getAllMoviesByFresh();
}

module.exports = {getAllMovies, getMovie, getMoviesWithAwards, getMoviesByLanguage, getAllMoviesByFresh};