const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';


async function getAllMovies(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getSingleMovie(id){
    const connectiondb = await conn.getConnection();
    const moovie = await connectiondb.db(DATABASE).collection(MOVIES).findOne({_id: new ObjectId(id)});

    return moovie;
}

async function getWinnerMovies(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'awards.wins': {gt:0}}).toArray();
    
    return movies;
}

module.exports = {getAllMovies, getSingleMovie, getWinnerMovies};