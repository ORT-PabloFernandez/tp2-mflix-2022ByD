const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){    
    return movies.getMovieId(id);
}

async function getMoviesWinners(){    
    return movies.getMoviesAward();
}

async function getMoviesLanguages(pageSize, page, languages){    
    return movies.getMoviesLanguages(pageSize, page, languages);
}

async function getMoviesRanking(pageSize, page){    
    return movies.getMoviesRanking(pageSize, page);
}



module.exports = {getAllMovies, getMovie, getMoviesWinners, getMoviesLanguages, getMoviesRanking};