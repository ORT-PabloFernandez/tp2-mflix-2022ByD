const { ObjectId } = require('mongodb');
const conn = require('./conn');
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

async function getSingleMovie(id){
    const connectiondb = await conn.getConnection();
    const moovie = await connectiondb.db(DATABASE).collection(MOVIES).findOne({_id: new ObjectId(id)});

    return moovie;
}

async function getWinnerMovies(){
    const connectiondb = await conn.getConnection();
    const queryObject = {
        'awards.wins': { $gte: 1 }
      };
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find(queryObject).toArray();
    // { $gte : 20000 }}
    
    return movies;
}

async function getAllMoviesSinPaginado(){
    const connectiondb = await conn.getConnection();

    const movies = await connectiondb.db(DATABASE).collection(MOVIES).toArray();

    return movies;
}

async function moviesPorIdioma(){
    const movies = await getAllMovies(100,10);
    console.log("paso por acá");
    const moviesPorIdioma = movies.filter( (movies) => movies.languaje != null);

    return moviesPorIdioma;
}
module.exports = {getAllMovies, getSingleMovie, getWinnerMovies, getAllMoviesSinPaginado,moviesPorIdioma};