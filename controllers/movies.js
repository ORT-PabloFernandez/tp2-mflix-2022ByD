const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMoviesById(id){    
    return movies.getMoviesById(id);
}

async function getMoviesWin(number){    
    return movies.getMoviesByWin(number);
}

async function getMoviesLanguajes(languaje,pageSize, page){    
    return movies.getMoviesByLanguaje(languaje,pageSize, page);
}


module.exports = {getAllMovies, getMoviesById, getMoviesWin, getMoviesLanguajes};