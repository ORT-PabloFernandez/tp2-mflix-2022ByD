const movies = require("../data/movies");

async function getAllMovies(pageSize, page) {
  return movies.getAllMovies(pageSize, page);
}
async function getAllMoviesPorID(id) {
  return movies.getAllMoviesPorID(id);
}
async function getAllMoviesGanadoras(pageSize, page) {
  return movies.getAllMoviesGanadoras(pageSize, page);
}
async function getAllMoviesPorIdioma(idioma, pageSize, page) {
  return movies.getAllMoviesPorIdioma(idioma, pageSize, page);
}
async function getAllMoviesPorfresh(pageSize, page) {
  return movies.getAllMoviesPorfresh(pageSize, page);
}

module.exports = {
  getAllMovies,
  getAllMoviesPorID,
  getAllMoviesGanadoras,
  getAllMoviesPorIdioma,
  getAllMoviesPorfresh,
};
