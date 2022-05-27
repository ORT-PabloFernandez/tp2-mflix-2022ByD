const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMoviesXId(id){    
    return movies.getMoviesXId(id);
}

async function getMovieAwards(aw){    
    return movies.getMovieAwards(aw);
}

async function getMovieXLanguage(pageSize, page, language){    
    return movies.getMovieXLanguage(pageSize, page, language);
}

async function getMovieRanking(){    
    return movies.getMovieRanking();
}

module.exports = {getAllMovies, getMoviesXId, getMovieAwards, getMovieXLanguage, getMovieRanking};