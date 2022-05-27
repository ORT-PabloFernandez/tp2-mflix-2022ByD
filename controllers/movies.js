const movies = require('../data/movies');

async function getAllMovies(pageSize, page) {    
    return movies.getAllMovies(pageSize, page);
}

async function getMovieById(id) {
    return movies.getMovieById(id);
}

async function getMoviesWithAwards(pageSize, page) {
    return movies.getMoviesWithAwards(pageSize, page);
}

// otra forma de hacer lo mismo sin la projection
async function getMoviesWithAwardsNoProj(pageSize, page) {
    const resultMovies = await movies.getMoviesWithAwardsNoProjection(pageSize, page)
    const result = resultMovies.map( movie => {
        return {
            title: movie.title,
            poster: movie.poster,
            plot: movie.plot
        }
    })
    return result;
}

async function getMoviesByLanguage(language, pageSize, page) {
    return movies.getMoviesByLanguage(language,pageSize, page);
}

async function getMoviesSortedByTomatoes(pageSize, page) {
    return movies.getMoviesSortedByTomatoes(pageSize, page);
}

module.exports = {getAllMovies, getMovieById, getMoviesWithAwards, getMoviesByLanguage, getMoviesSortedByTomatoes, getMoviesWithAwardsNoProj};