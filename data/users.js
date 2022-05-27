const conn = require("./conn");
const DATABASE = "sample_mflix";
const USERS = "users";

async function getAllUsers() {
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
    const user = await connectiondb
      .db(DATABASE)
      .collection(MOVIES)
      .find({ _id: new objectId(id) })
      .toArray();
    return user;
  }

module.exports = {getUserId}