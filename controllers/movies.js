const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getOneMovie(id){
    return movies.getOneMovie(id);
}

async function getMoviesWins(wins){
    return movies.getMoviesWins(wins);
}

async function getMoviesLanguage(languages){
    return movies.getMoviesLanguage(languages);
}

async function getFresh(fresh){
    return movies.getFresh(fresh);
}

module.exports = {getAllMovies, getOneMovie, getMoviesWins,getMoviesLanguage, getFresh};