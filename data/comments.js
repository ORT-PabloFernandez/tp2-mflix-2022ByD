const conn = require('./conn');
const objectId = require('mongodb').ObjectId;
const DATABASE = 'sample_mflix';
const COMMENTS = 'comments';

async function getAllComments() {
    const connectiondb = await conn.getConnection();
    const comments = await connectiondb
                        .db(DATABASE)
                        .collection(COMMENTS)
                        .find()
                        .toArray();
    return comments;
}

async function getCommentsByUserId(user_id){
    const connectiondb = await conn.getConnection();
    const query = {_id: new objectId(user_id)};
    const comments = await connectiondb
                        .db(DATABASE)
                        .collection(COMMENTS)
                        .find(query)
                        .toArray();
    return comments;
}

module.exports = {getCommentsByUserId, getAllComments}
