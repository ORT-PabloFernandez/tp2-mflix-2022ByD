
const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
 return movies.getAllMovies(pageSize, page);

}

async function getMoviebByID(id) {
    return movies.getMoviebByID(id);
}

async function getMovieAwards(){
    return movies.getMovieAwards();
}

async function getMovieFresh(){
    return movies.getMovieFresh(); 
}
module.exports = {
    getAllMovies,
    getMoviebByID,
    getMovieAwards,
    getMovieFresh,
    };