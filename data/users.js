const conn = require('./conn');
const DATABASE = 'sample_mflix';
const USERS = 'users';

async function getUserById(userId) {
  const connectiondb = await conn.getConnection();
  const user = await connectiondb.db(DATABASE).collection(USERS).find({ id: userId });
  console.info('user with ' + userId, user);
  return user;
}

async function getAllUsers(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const users = await connectiondb
    .db(DATABASE)
    .collection(USERS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  console.log('users', users);
  return users;
}

module.exports = {
  getAllUsers,
  getUserById,
};
