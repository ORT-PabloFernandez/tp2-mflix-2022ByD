const movies = require("../data/movies");

async function getAllMovies(pageSize, page) {
  return movies.getAllMovies(pageSize, page);
}

async function getMoviePerId(id) {
  return movies.getMovieId(id);
}

async function getOneAwardsPlus(pageSize, page) {
  let moviesReturn = await movies.getOneAwardsPlus(pageSize, page);

  let awardsReturn = moviesReturn.map((winners) => ({
    title: winners.title,
    poster: winners.poster,
    plot: winners.plot,
  }));
  return awardsReturn;
}

async function getLenguageFilter(ln, pageSize, page) {
  return movies.getLenguageFilter(ln, pageSize, page);
}

async function getCalificationDesc(pageSize, page) {
  return movies.getCalificationDesc(pageSize, page);
}

async function getUsersCommentsPerId(id, pageSize, page) {
  return movies.getUsersCommentsPerId(id, pageSize, page);
}

module.exports = {
  getAllMovies,
  getMoviePerId,
  getOneAwardsPlus,
  getLenguageFilter,
  getCalificationDesc,
  getUsersCommentsPerId
};
