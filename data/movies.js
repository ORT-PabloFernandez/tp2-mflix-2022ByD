const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';

async function getAllMovies(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}

async function getMovieById(movieId) {
  const connectiondb = await conn.getConnection();
  const movie = await connectiondb.db(DATABASE).collection(MOVIES).findOne({ id: movieId });
  return movie;
}

async function getMoviesWithAwardThanMoreOne(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ 'awards.wins': { $gte: 1 } }, { title: 1, poster: 1, plot: 1 })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  console.info('Movie with id as', movies);
  return movies;
}

async function getMoviesWithAwardThanMoreOne(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ 'awards.wins': { $gte: 1 } }, { title: 1, poster: 1, plot: 1 })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}

async function getMoviesByLanguage(language, pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ languages: language })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}

async function getMoviesByScoreFresh(pageSize, page) {
  const connectiondb = await conn.getConnection();
  console.info('getting sorted movies');
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .sort({ 'tomatoes.fresh': -1 })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesWithAwardThanMoreOne,
  getMoviesByLanguage,
  getMoviesByScoreFresh,
};
