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

async function getMoviePorId(id) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ _id: new objectId(id) })
        .toArray();
    return movies;
}

async function getMoviesGanadoras(cantPremios) {
    const movies = await getAllMovies(0, 0);
    const devo = movies.filter(
        (ganadoras) => ganadoras.awards.wins >= cantPremios
    );
    return devo;
}

async function getPeliPorIdioma(idioma, pageSize, page) {
    const connectiondb = await conn.getConnection();
    const query = {"languages": idioma}
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find(query).limit(pageSize).skip(pageSize * page)
        .toArray();
    return movies;
}

async function getAllTomatoes(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({}).limit(pageSize).skip(pageSize * page).sort({ "tomatoes.fresh": -1 })
        .toArray();
    return movies;
}


// async function getAllTomatoes() {
//     const movies = await getAllMovies(10, 1)
//     .find()
//     .sort(tomatoes.fresh, 1) 
//     .toArray();
//     return movies;
// }

module.exports = { getAllMovies, getMoviePorId, getMoviesGanadoras, getPeliPorIdioma,getAllTomatoes};