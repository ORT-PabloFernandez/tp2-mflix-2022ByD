const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';


async function getAllMovies(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({}).limit(pageSize).skip(pageSize * page)
        .toArray();
    return movies;
}
//limit(pageSize).skip(pageSize * page)
async function getSingleMovie(id) {
    const connectiondb = await conn.getConnection();
    const moovie = await connectiondb.db(DATABASE).collection(MOVIES).findOne({ _id: new ObjectId(id) });

    return moovie;
}

async function mayoresDe(year) {
    const connectiondb = await conn.getConnection();

    const peliculas = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ 'year': { $gt: year}})
        .toArray();

    return peliculas;
}

async function getWinnerMovies() {
    const connectiondb = await conn.getConnection();

    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ 'awards.wins': { $gt: 0 } }).toArray();
    // { $gte : 20000 }}

    return movies;
}

async function getMoviesWithAwards(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({"awards.wins" : {$gt:0}}, {projection: {title:1, plot:1, poster: 1, _id:false}})
        .limit(pageSize)
        .skip(pageSize * page)
        .toArray();

   /* const moviesEditadas = movies.map((moovie) => {
        return {
            titulo: moovie.title,
            poster: moovie.poster,
            plot: moovie.plot
        }
        return movies;
    });
    */
    return movies;

   // return moviesEditadas;
}


async function mooviesPorLanguaje(languages,pageSize,page){
    const connectiondb = await conn.getConnection();
    const moovies = await connectiondb
                            .db(DATABASE)
                            .collection(MOVIES)
                            .find({'languages' : languages})
                            .limit(pageSize)
                            .skip(pageSize * page)
                            .toArray();

    return moovies;
}

async function freshInOrder(){
    const connectiondb = await conn.getConnection();

    const moovies = await connectiondb.
                        db(DATABASE)
                        .collection(MOVIES)
                        .find({'tomatoes.fresh': {$exists :true }})
                       .sort( (a,b) =>{
                            return a.tomatoes.fresh - b.tomatoes.fresh;
                             })
                        
                        .toArray();

    return moovies;
}

async function getMoviesSortedByTomatoes(pageSize, page){

    const connectiondb = await conn.getConnection();
    const moovies = await connectiondb
                            .db(DATABASE)
                            .collection(MOVIES)
                           .find({'tomatoes.fresh' : {$exists: true}}) 
                           .sort( {"tomatoes.fresh" : -1})              
                        .limit(pageSize)
                        .skip(pageSize * page)
                        .toArray();    
    return moovies;
}

module.exports = { getAllMovies, getSingleMovie, getWinnerMovies, mayoresDe, getMoviesWithAwards, mooviesPorLanguaje ,freshInOrder,getMoviesSortedByTomatoes};