const { ObjectID } = require('bson');
const conn = require('./conn');
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
async function getMovie(id){
    const collectiondb = await conn.getConnection();
    const movies = await collectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({_id: new ObjectID(`${id}`)})
        .toArray();
    return movies;
}

async function getMovieAward(){
    const collectiondb = await conn.getConnection();
    const movies = await collectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find()
        .toArray();
    const filterMovie = movies.filter((movie) => movie.awards.wins >=1);
    return filterMovie;
}
async function getMovieByIdiom(pageSize, page, idiom){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
     .db(DATABASE)
     .collection(MOVIES)
     .find({})
     .limit(pageSize)
     .skip(pageSize * page)
        .toArray();

    let arrayFilter = [];
    const movieFilter = movies
    .filter((item) => item.languages !== undefined)
    .filter((movie) => movie.languages.find((l) => l === idiom));
    movieFilter.map((item) => {
        const movie = {
            title: item.title,
            poster: item.poster,
            plot: item.fullplot,
            lenguage: item.lenguage
        };
        arrayFilter.push(movie);
    });
    return arrayFilter;
     
    
}

module.exports = {
    getAllMovies,
    getMovie,
    getMovieAward,
    getMovieByIdiom,

};