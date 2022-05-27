const conn = require('./conn');
const objectId = require('mongodb').ObjectId;
const DATABASE = 'sample_mflix';
const USERS = 'users';

async function getAllUsers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const users = await connectiondb
                        .db(DATABASE)
                        .collection(USERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return users;
}

async function getUserById(user_id){
    const connectiondb = await conn.getConnection();
    const query = {_id: new objectId(user_id)};
    const users = await connectiondb
                        .db(DATABASE)
                        .collection(USERS)
                        .find(query)
                        .toArray();
    return users;
}

module.exports = {getAllUsers, getUserById}