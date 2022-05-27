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
                .find({"awards.wins": {$gte: 1}}).limit(pageSize).skip(pageSize * page)
                .toArray();

    let awardedMovies = movies.map((awarded) => ({
        title: awarded.title,
        poster: awarded.poster,
        plot: awarded.plot
    }))

    return awardedMovies;
}

async function getMoviesByLanguage(language, pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find({"languages": language}).limit(pageSize).skip(pageSize * page)
                .toArray();

    /* const moviesByLanguage = movies.filter((byLanguage) => byLanguage.languages === language); */

    return movies;
}

async function getMoviesByRating(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
      .db(DATABASE)
      .collection(MOVIES)
      .find()
      .sort({ "tomatoes.fresh": -1 })
      .limit(pageSize)
      .skip(pageSize * page)
      .toArray();
  
    return movies;
  }

module.exports = {getAllMovies, getMovieById, getAwardedMovies, getMoviesByLanguage, getMoviesByRating};