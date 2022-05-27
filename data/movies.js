const conn = require("./conn");
const DATABASE = "sample_mflix";
const MOVIES = "movies";

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

async function getMovieId(id) {
  const connectiondb = await conn.getConnection();
  const movie = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ _id: new objectId(id) })
    .toArray();
  return movie;
}

async function getMoviesAward() {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find(
      { awards: { wins: { $gte: 1 } } },
      {
        title: "",
        poster: "",
        plot: "",
      }
    )
    .toArray();
  return movies;
}

async function getMoviesLanguages(pageSize, page, languages) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ languages: { $eq: languages } })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}

async function getMoviesRanking(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .sort({ tomatoes: { viewer: { ranking: 1 } } })
    .toArray();
  return movies;
}



module.exports = {
  getAllMovies,
  getMovieId,
  getMoviesAward,
  getMoviesLanguages,
  getMoviesRanking,
};
