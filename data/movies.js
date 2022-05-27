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
async function getMovieId(id) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ _id: new objectId(id) })
    .toArray();
  return movies;
}
async function getWinner(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ "awards.wins": { $gte: parseInt(process.env.WINNER) } })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}
async function getPerLanguage(languaje, pageSize, page) {
    console.log(languaje);
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
      .db(DATABASE)
      .collection(MOVIES)
      .find({"languages.0": languaje})
      .limit(pageSize)
      .skip(pageSize * page)
      .toArray();
    return movies;
  }
  async function getRanked(page, pageSize) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
      .db(DATABASE)
      .collection(MOVIES)
      .find().sort( { "tomatoes.fresh" : -1 } )
      .limit(pageSize)
      .skip(pageSize * page)
      .toArray();
    return movies;
  }
module.exports = { getAllMovies, getMovieId, getWinner, getPerLanguage,getRanked };
