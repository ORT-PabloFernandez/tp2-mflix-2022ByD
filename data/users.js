const conn = require('./conn');
const DATABASE = 'sample_mflix';
const COMMENTS = 'comments';
const USERS = 'users';
const objectId = require('mongodb').ObjectId


async function getCommentsByUser(id, pageSize, page){
    const connectiondb = await conn.getConnection(); 
    const user = await connectiondb
                        .db(DATABASE)
                        .collection(USERS)
                        .find({_id: new objectId(id)})
                        .toArray()

	const comments = await connectiondb
                        .db(DATABASE)
                        .collection(COMMENTS)
                        .find({name: user[0].name}).limit(pageSize).skip(pageSize * page)
                        .toArray()

    return comments
}

async function getAllUsersfromDb(pageSize, page){
    const connectiondb = await conn.getConnection(); 
	const users = await connectiondb
                        .db(DATABASE)
                        .collection(USERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray()

    return users
}


module.exports = {getCommentsByUser, getAllUsersfromDb};