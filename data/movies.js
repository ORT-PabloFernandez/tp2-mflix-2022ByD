const conn = require('./conn');
const ObjectId = require('mongodb').ObjectId;

const DATABASE = 'sample_mflix';
const MOVIES = 'movies';

async function getAllMovies(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({})
                        .limit(pageSize)
                        .skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getMovieById(id) {
    const connectiondb = await conn.getConnection();
    return await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .findOne({_id : new ObjectId(id)})
}


async function getMoviesWithAwards(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({"awards.wins" : {$gt:0}}, {projection: {title:1, plot:1, poster: 1, _id:false}})
                        .limit(pageSize)
                        .skip(pageSize * page)
                        .toArray();    
    return movies;
}

// otra forma de hacer lo mismo sin la projection
async function getMoviesWithAwardsNoProjection(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({"awards.wins" : {$gt:0}})
                        .limit(pageSize)
                        .skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getMoviesByLanguage(language, pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({languages : [language]})
                        .limit(pageSize)
                        .skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getMoviesSortedByTomatoes(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({"tomatoes.fresh" : {$exists: true}})
                        .sort({
                            "tomatoes.fresh" : -1
                        })
                        .limit(pageSize)
                        .skip(pageSize * page)
                        .toArray();    
    return movies;
}


module.exports = {getAllMovies, getMovieById, getMoviesWithAwards, getMoviesWithAwardsNoProjection, getMoviesByLanguage, getMoviesSortedByTomatoes};