const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';
const objectId = require('mongodb').ObjectId


async function getAllMovies(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getMovieById(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({_id: new objectId(id)})
                .toArray();
    
    return movie;
}

async function getAwardedMovies(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({}).limit(pageSize).skip(pageSize * page)
                .toArray();

    const awardedMovies = movies.filter((awarded) => parseInt(awarded.awards.wins) >= 1);

    return awardedMovies;
}

async function getMoviesByLanguage(language, pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({}).limit(pageSize).skip(pageSize * page)
                .toArray();

    const moviesByLanguage = movies.filter((byLanguage) => byLanguage.languages === language);

    return moviesByLanguage;
}

module.exports = {getAllMovies, getMovieById, getAwardedMovies, getMoviesByLanguage};