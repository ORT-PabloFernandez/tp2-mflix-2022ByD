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

async function getPorId(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .findOne({_id: new objectId(id)});
    return movie;
}

async function getGanadoras(cant){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find()
                        .toArray();

    const ganadoras = movies
                        .filter(movie => movie.awards.wins >= cant)
                        .map( (movie) => ({
                                title: movie.title,
                                poster: movie.poster,
                                plot: movie.plot
                        }));
    return ganadoras;                   
}

async function getPorIdioma(idioma, pageSize, page){
    const movies = await getAllMovies(pageSize, page);
    const moviesIdioma = movies
                            .filter(movie => movie.languages == idioma);
    return moviesIdioma;
}

async function puntajeTomatoes(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find()
                        .toArray();

    movies.sort((movieA, movieB) => movieA.tomatoes.fresh - movieB.tomatoes.fresh);
    return movies;
}                   

module.exports = {getAllMovies, getPorId, getGanadoras, getPorIdioma, puntajeTomatoes};