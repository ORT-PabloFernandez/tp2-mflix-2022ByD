const conn = require('./conn');
const objectId = require('mongodb').ObjectId;
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

async function getMovieById(movie_id){
    const connectiondb = await conn.getConnection();
    const query = {_id: new objectId(movie_id)};
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find(query)
                        .toArray();
    return movies;
}

async function getMoviesWithAtLeastOnePrice(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const query = {"award.wins": {$gt: 1}};
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find(query).limit(pageSize).skip(pageSize * page)
                        .toArray();
    return movies;
}

async function getMoviesByLanguage(pageSize, page, language_id) {
    const connectiondb = await conn.getConnection();
    const query = {"languages": language_id};
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find(query).limit(pageSize).skip(pageSize * page)
                        .toArray();
    return movies;
}

module.exports = {getAllMovies, getMovieById, getMoviesWithAtLeastOnePrice, getMoviesByLanguage};