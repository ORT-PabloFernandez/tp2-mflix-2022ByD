const conn = require("./conn");
const movies = require("./movies");
const { ObjectID } = require("bson");
const DATABASE = "sample_mflix";
const COMMENTS = "comments";

async function getAllComments(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const comments = await connectiondb
    .db(DATABASE)
    .collection(COMMENTS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return comments;
}

async function getAllCommentsByEmail(email) {
  const connectiondb = await conn.getConnection();
  const comments = await connectiondb
    .db(DATABASE)
    .collection(COMMENTS)
    .find({})
    .toArray();

  let commentsByUser = comments.filter((c) => c.email === email);
  //   ME CIERRA LA CONEXIÓN CON LA BASE DE DATOS
  // let commentsMovieData = [];
  // commentsByUser.map((c) => {
  //   let comment = {
  //     nameAuthor: c.name,
  //     emailAuthor: c.email,
  //     movie: c.movie_id,
  //     comment: c.text,
  //     date: c.date,
  //   };
  //   commentsMovieData.push(comment);
  // });

  return commentsByUser;
}

module.exports = { getAllComments, getAllCommentsByEmail };
