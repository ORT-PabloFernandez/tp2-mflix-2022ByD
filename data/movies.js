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

async function getMoviesWins(wins){
    const connectiondb = await conn.getConnection();
    const moviesWins = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'awards.wins':{$gte: parseInt(wins)}})
                        .map(movie => ({
                            movie:{
                                title: movie.title,
                                poste: movie.poster,
                                plop: movie.plot,
                            }
                        }))
                        .toArray()
    return moviesWins;                    
}

async function getMoviesLanguage(languages){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'languages': languages})
                        .toArray();    
    return movies;
}

async function getFresh(fresh){
    const connectiondb = await conn.getConnection();
    const movieFresh = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'tomatoes.fresh':{$gt: fresh}})
                        .sort((freshA, freshB) => freshA.fresh > freshB.fresh ? 1: -1)
                        .toArray(); 
                           
    return movieFresh;
}


module.exports = {getAllMovies, getOneMovie, getMoviesWins,getMoviesLanguage,getFresh};