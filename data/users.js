const conn = require('./conn');
const ObjectId = require('mongodb').ObjectId;

const DATABASE = 'sample_mflix';
const USERS = 'users';

async function getUserById(id) {
    const connectiondb = await conn.getConnection();
    return await connectiondb
        .db(DATABASE)
        .collection(USERS)
        .findOne({_id : new ObjectId(id)})
}

module.exports = {getUserById};