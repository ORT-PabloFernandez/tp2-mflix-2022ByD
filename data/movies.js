const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';
const objectId = require('mongodb').ObjectId;


async function getAllMovies(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getOneMovie(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({_id: new objectId(id)})
                .toArray();
    return movie;
}



module.exports = {getAllMovies,getOneMovie};