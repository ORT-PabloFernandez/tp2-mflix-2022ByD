const conn = require("./conn");
const DATABASE = "sample_mflix";
const COMMENTS = "comments";

async function getCommetsUser(name) {
    const connectiondb = await conn.getConnection();
    const user = await connectiondb
      .db(DATABASE)
      .collection(COMMENTS)
      .find({ name: { $eq: name}})
      .toArray();
    return user;
  }

module.exports = {getUserId}