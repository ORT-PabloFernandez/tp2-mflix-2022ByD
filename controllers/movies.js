const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMoviesById(id){    
    return movies.getMoviesById(id);
}

async function getMoviesWin(number,pageSize, page){    
    return movies.getMoviesByWin(number,pageSize, page);
}

async function getMoviesLanguajes(languaje,pageSize, page){    
    return movies.getMoviesByLanguaje(languaje,pageSize, page);
}
async function getOrdenTomatoes(pageSize, page){
    return movies.getMoviesByTomatoes(pageSize, page);
}

async function getAllUsers(){    
    return movies.getUsers();
}
async function getAllComments(){    
    return movies.getComments();
}


module.exports = {getAllMovies, getMoviesById, getMoviesWin, getMoviesLanguajes, getOrdenTomatoes, getAllUsers, getAllComments};