const { json } = require('express/lib/response');
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

async function getMoviesById(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({_id: new objectId(id)})
                .toArray();                 
    return movie;
}

async function getMoviesByWin(cantidadGanadas, pageSize, page ){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({}).limit(pageSize).skip(pageSize * page).sort({"tomatoes.fresh": -1})
                .toArray();              
    return movies.filter(movie => movie.awards.wins >= cantidadGanadas)
                 .map(movie => {
                        return {
                            title: movie.title,
                            poster: movie.poster,
                            plot: movie.plot,
                        } 
                }) 
}

async function getMoviesByLanguaje(languaje, pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({languages: languaje}).limit(pageSize).skip(pageSize * page)
                .toArray(); 
    return movies             
}

async function getMoviesByTomatoes(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find().limit(pageSize).skip(pageSize * page)
                .toArray(); 
    return movies.filter(movie => movie.awards.wins >= cantidadGanadas) 
}

module.exports = {getAllMovies, getMoviesById, getMoviesByWin, getMoviesByLanguaje};