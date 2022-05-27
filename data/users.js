const conn = require("./conn");
const DATABASE = "sample_mflix";
const USERS = "users";
const COMMENTS = "comments";
const objectId = require("mongodb").ObjectId;

async function getUsers() {
  const connectiondb = await conn.getConnection();
  const users = await connectiondb
    .db(DATABASE)
    .collection(USERS)
    .find({})
    .toArray();
  return users;
}

async function getUserId(id) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
      .db(DATABASE)
      .collection(USERS)
      .find({ _id: new objectId(id) })
      .toArray();
    return movies;
  }
async function getCommentsEmail(email) {
    const connectiondb = await conn.getConnection();
    const users = await connectiondb
      .db(DATABASE)
      .collection(COMMENTS)
      .find({"email": email})
      .toArray();
    return users;
  }
module.exports = { getUsers,getCommentsEmail,getUserId};