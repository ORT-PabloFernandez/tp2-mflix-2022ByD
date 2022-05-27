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

async function getMovie(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .findOne({_id: new objectId(id)});
    return movie;
}

async function getWinerMovies(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                    .db(DATABASE)
                    .collection(MOVIES)
                    .find({"awards.wins": {$gte: 1}}, {projection: {title:1, _id:0, plot: 1, poster: 1}})
                    .toArray();
    return movies;
}

async function getAllMoviesByLanguage(language,pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({languages: language}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getAllMoviesByTomatoes(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).sort({"tomatoes.fresh": -1})
                        .toArray();    
    return movies;
}

module.exports = {getAllMovies, getMovie, getWinerMovies, getAllMoviesByLanguage, getAllMoviesByTomatoes};