const conn = require("./conn");
const comments = require("./comments");
const { ObjectID } = require("bson");
const DATABASE = "sample_mflix";
const USERS = "users";

async function getAllUsers(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const users = await connectiondb
    .db(DATABASE)
    .collection(USERS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return users;
}

async function getCommentsByUserId(id) {
  const connectiondb = await conn.getConnection();
  const user = await connectiondb
    .db(DATABASE)
    .collection(USERS)
    .findOne({ _id: new ObjectID(`${id}`) });

  console.log(user.email);

  const commentsByUser = await comments.getAllCommentsByEmail(user.email);
  return commentsByUser;
}

module.exports = { getAllUsers, getCommentsByUserId };
