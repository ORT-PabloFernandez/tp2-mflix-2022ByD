const { ObjectID } = require('bson');
const conn = require('./conn');
const DATABASE = 'sample_mflix';
const USERS = "users";
const COMMENTS = "comments";

async function getCommentsByUser(id){
    const connectiondb = await conn.getConnection();
    const user = await connectiondb
                    .db(DATABASE)
                    .collection(USERS)
                    .findOne({_id: ObjectID(id)});
    
    const comments = await connectiondb
                    .db(DATABASE)
                    .collection(COMMENTS)
                    .find({name: user.name})
                    .toArray();

    return comments;
}

module.exports = {getCommentsByUser}