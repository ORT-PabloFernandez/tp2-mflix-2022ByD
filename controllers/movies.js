const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){
    return await movies.getMovie(id);
}

async function getMovieAward() {
    return await movies.getMovieAward();
}
async function getMovieByIdiom(pageSize, page, idiom){
    return await movies.getMovieByIdiom(pageSize, page, idiom)
}

module.exports = {
    getAllMovies,
    getMovie,
    getMovieAward,
    getMovieByIdiom,
};
   