const conn = require('./conn');
const ObjectId = require('mongodb').ObjectId;

const DATABASE = 'sample_mflix';
const COMMENTS = 'comments';

async function getCommentsByUserEmail(userEmail){
    const connectiondb = await conn.getConnection();
    const comments = await connectiondb
                        .db(DATABASE)
                        .collection(COMMENTS)
                        .find({email : userEmail})
                        .toArray();    
    return comments;
}

module.exports = {getCommentsByUserEmail};