const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){
    return movies.getMovie(id);
}

async function getWinerMovies(){ 
    return movies.getWinerMovies();
}

async function getAllMoviesByLanguage(language, pageSize, page){    
    return movies.getAllMoviesByLanguage(language, pageSize, page);
}

async function getAllMoviesByTomatoes(){    
    return movies.getAllMoviesByTomatoes();
}

module.exports = {getAllMovies, getMovie, getWinerMovies, getAllMoviesByLanguage, getAllMoviesByTomatoes};