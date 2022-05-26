const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMoviesById(id){    
    return movies.getMoviesId(id);
}



module.exports = {getAllMovies, getMoviesById};