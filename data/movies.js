const { ObjectId } = require('mongodb');
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
                        .find({_id: new ObjectId(id)})
                        .toArray();    
    return movie;
}

async function getMovieMinPrized(prizeQty, pageSize, page){
    const connectiondb = await conn.getConnection();
    const prizeQuantity = parseInt(prizeQty);
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({"awards.wins": {$gte: prizeQuantity}}).limit(pageSize).skip(pageSize * page)
                        .toArray();
    
    const moviesAttr = {
        'filteredMovies': movies.map(function (value) {
            return {
                title: value.title,
                poster: value.poster,
                plot: value.plot,
            }

        })
    };
    return moviesAttr;
}

async function getMoviesByLanguage(language, pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({ languages: language }).limit(pageSize).skip(pageSize * page)
                        .toArray();
    return movies;
}

async function getMoviesByPuntaje(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find().sort({"tomatoes.fresh":-1}).limit(pageSize).skip(pageSize * page)
                        .toArray();  
    return movies;
}

module.exports = {getAllMovies, getMovie, getMovieMinPrized, getMoviesByLanguage, getMoviesByPuntaje};