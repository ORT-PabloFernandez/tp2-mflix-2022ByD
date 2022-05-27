const conn = require("./conn");
const DATABASE = "sample_mflix";
const MOVIES = "movies";
const USERS = "users";
const COMMENTS = "comments";
const objectId = require("mongodb").ObjectId;
const awardsPoints = process.env.AWARDS;

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

async function getOneAwardsPlus(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const awardsRp = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ "awards.wins": { $gte: parseInt(awardsPoints) } })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();

  return awardsRp;
}

async function getLenguageFilter(ln, pageSize, page) {
  const connectiondb = await conn.getConnection();
  const lnFilter = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ languages: ln })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();

  return lnFilter;
}

async function getCalificationDesc(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const calMoviesDesc = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .sort({ "tomatoes.fresh": -1 })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();

  return calMoviesDesc;
}

async function getUsersCommentsPerId(id, pageSize, page) {
    const connectiondb = await conn.getConnection();
    const user = await connectiondb
      .db(DATABASE)
      .collection(USERS)
      .aggregate([{
        $lookup: {
        From: COMMENTS,
        LocalField: "_id",
        foreignField: "_id",
        as: "usersComments"
        }}])
      .limit(pageSize)
      .skip(pageSize * page)
      .toArray();
  
    return userCommentsMovies;
  }



module.exports = {
  getAllMovies,
  getMovieId,
  getOneAwardsPlus,
  getLenguageFilter,
  getCalificationDesc,
  getUsersCommentsPerId
};
