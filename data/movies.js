const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';
const objectId = require('mongodb').ObjectId;

async function getAllMovies(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({}).limit(pageSize).skip(pageSize * page)
        .toArray();
    return movies;
}

// 1 - Necesitamos un endpoint que nos devuelva una película (movie) particular por _id

async function getMovie(id) {
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({_id: new objectId(id)})
                        .toArray();    
    return movie;
}

// 2  - Los desarrolladores de frontend estan haciendo un pantalla para mostrar solo las películas ganadoras
// de al menos un premio. Necesitamos que desarrolles el endpoint respectivo. 
//Solo necesitan el titulo, el poster y el resumen de la reseña (plot)
async function getMovieConPremios() {

    const connectiondb = await conn.getConnection();
    const moviePremios = await connectiondb.db(DATABASE).collection(MOVIES).find({"awards.wins": {$gt:0}}).toArray();

  
    return moviePremios;
}


// 3 -


async function getMovieLenguage(language, pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
      .db(DATABASE)
      .collection(MOVIES)
      .find({ languages: { $eq: language } })
      .limit(pageSize)
      .skip(pageSize * page)
      .toArray();
    return movies;
  }

  async function getMoviesPorTomatoes(){

    const connectiondb = await conn.getConnection();
    const movies = await connectiondb.db(DATABASE).collection(MOVIES).find({tomatoes:{$orderBy: {fresh:1}}}).toArray();

    return movies;
}



module.exports = { getAllMovies,getMovie,getMovieConPremios, getMovieLenguage,getMoviesPorTomatoes };