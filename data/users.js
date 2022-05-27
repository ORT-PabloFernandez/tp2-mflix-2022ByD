const conn = require('./conn');
const objectId = require('mongodb').ObjectId;
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';

async function getAllUsers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getUserById(user_id){
    const connectiondb = await conn.getConnection();
    const query = {_id: new objectId(user_id)};
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find(query)
                        .toArray();
    return movies;
}

module.exports = {getAllUsers, getUserById}