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

async function getById(id){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({ _id: new objectId(id) })
                        .toArray();    
    return movies;
}

async function getOneAwards(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({ "awards.wins": { $gte : 4 } })                        
                        .toArray();
    
    const moviesCustom = await movies.map(movie => ({
        title: movie.title,
        poster: movie.poster,
        plot: movie.plot,
    }))                    
    return moviesCustom;
}

async function getPorIdioma(idioma, pageSize, page){

    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({ languages: idioma }).limit(pageSize).skip(pageSize * page)                     
                        .toArray();
     return movies;
}

async function getOrdenadasPorPunjate(orden, pageSize, page){

    const connectiondb = await conn.getConnection();
    var ordenb = { "tomatoes.fresh": parseInt(orden) };
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find().limit(pageSize).skip(pageSize * page)   
                        .sort(ordenb)
                        .toArray();    
  

    return movies;
}

module.exports = {getAllMovies, getById, getOneAwards, getPorIdioma, getOrdenadasPorPunjate};