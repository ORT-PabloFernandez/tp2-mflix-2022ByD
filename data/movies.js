const conn = require("./conn");
const DATABASE = "sample_mflix";
const MOVIES = "movies";
const objectId = require("mongodb").ObjectId;

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

async function getMoviebyId(id) {
  const connectiondb = await conn.getConnection();
  const movie = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ _id: new objectId(id) })
    .toArray();
  return movie;
}

async function getAwardWinningMovies(amount) {
  const connectiondb = await conn.getConnection();
  const aWMovies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ "awards.wins": { $gte: parseInt(amount) } })
    .map((movie) => ({
      plot: movie.plot,
      poster: movie.poster,
      title: movie.title,
    }))
    .toArray();

  return aWMovies;
}

async function getMoviesByLanguage(lang, pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ languages: [lang] })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  console.log(lang);
  return movies;
}

async function orderByFresh() {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find()
    .sort({ "tomatoes.viewer.rating": -1 })
    .limit(10)
    .toArray();
  console.log(movies);
  return movies;
}

module.exports = {
  getAllMovies,
  getMoviebyId,
  getAwardWinningMovies,
  getMoviesByLanguage,
  orderByFresh,
};
