const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){
    return movies.getMovie(id);
}

async function getWinners(awards){
    return movies.getWinners(awards);
}



async function getMoviesByLanguage(language, pageSize, page){
    return movies.getMoviesByLanguage(language, pageSize, page)
}

async function getRankedMovies(){
    return movies.getRankedMovies();
}

module.exports = {getAllMovies, getMovie, getWinners, getMoviesByLanguage, getRankedMovies};