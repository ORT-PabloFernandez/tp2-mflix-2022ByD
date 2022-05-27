
const conn = require('./conn');
const objectId = require('mongodb').ObjectId;
const DATABASE = 'sample_mflix';
const USERS = 'users';
const COMMENTS = 'comments';

async function getAllUsers(){
    const connectiondb = await conn.getConnection();
    const users = await connectiondb
                        .db(DATABASE)
                        .collection(USERS)
                        .find({})
                        .toArray();    
    return users;
}

async function getUserById(id){
    const connectiondb = await conn.getConnection();
    const users = await connectiondb
                        .db(DATABASE)
                        .collection(USERS)
                        .findOne({'_id' : new objectId(id)}); 
    console.log(users);
    const comments = await connectiondb
                    .db(DATABASE)
                    .collection(COMMENTS)
                    .find({'email': users.email})
                    .toArray();
    
    console.log(comments)

    return comments;
}

module.exports = {getAllUsers, getUserById};