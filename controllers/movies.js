const movies = require('../data/movies');

async function getAllMovies(pageSize, page) {
  return movies.getAllMovies(pageSize, page);
}

async function getMoviesWithAwardThanMoreOne(pageSize, page) {
  return movies.getMoviesWithAwardThanMoreOne(pageSize, page);
}

async function getMovieById(movieId) {
  return movies.getMovieById(movieId);
}

async function getMoviesByLanguage(language, pageSize, page) {
  return movies.getMoviesByLanguage(language, pageSize, page);
}

async function getMoviesByScoreFresh(pageSize, page) {
  return movies.getMoviesByScoreFresh(pageSize, page);
}

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesWithAwardThanMoreOne,
  getMoviesByLanguage,
  getMoviesByScoreFresh,
};
