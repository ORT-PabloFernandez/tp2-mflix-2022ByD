const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getOneMovie(id){    
    return movies.getMovie(id);
}

async function getAwardedMovies(min){    
    return movies.getOnlyAwardedMovies(min);
}

async function getFilteredByLang(pageSize, page, lang){
    return movies.getFilteredLang(pageSize, page, lang);
}

async function getSortedByFresh(pageSize, page){
    return movies.getSortedFresh(pageSize, page);
}
module.exports = {getAllMovies, getOneMovie, getAwardedMovies, getFilteredByLang, getSortedByFresh};