const conn = require('./conn');
const DATABASE = 'sample_mflix';
const COMMENTS = 'comments';

async function getCommentsByEmailUser(emailUser) {
  const connectiondb = await conn.getConnection();
  const comments = await connectiondb
    .db(DATABASE)
    .collection(COMMENTS)
    .find({ email: emailUser })
    .toArray();
  return comments;
}

module.exports = {
  getCommentsByEmailUser,
};
