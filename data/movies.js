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

async function getMovies(id){
    const clientmongo = await conn.getConnection();
    const movies = await clientmongo
        .db(DATABASE)
        .collection(MOVIES)
        .find({_id: new objectId(id)})
        .toArray();
        
    return movies
}



module.exports = {getAllMovies, getMovies};