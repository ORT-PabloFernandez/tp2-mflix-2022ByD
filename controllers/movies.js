const movies = require("../data/movies");

async function getAllMovies(pageSize, page) {
  return movies.getAllMovies(pageSize, page);
}
async function getMovieId(id) {
  return movies.getMovieId(id);
}
async function getWinner(pageSize, page) {
  const winners = await movies.getWinner(pageSize, page);
  let arrayWinners = [];
  winners.map((m) => {
    let object = {
      title: m.title,
      poster: m.poster,
      plot: m.plot,
    };
    arrayWinners.push(object);
  });
  return arrayWinners;
}
async function getPerLanguage(languaje, pageSize, page) {
  return movies.getPerLanguage(languaje, pageSize, page);
}
async function getRanked(pageSize, page) {
    return movies.getRanked(pageSize, page);
  }
module.exports = { getMovieId, getAllMovies, getWinner, getPerLanguage,getRanked };
