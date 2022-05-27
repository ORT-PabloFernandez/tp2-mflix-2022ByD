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

async function getMovie(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                    .db(DATABASE)
                    .collection(MOVIES)
                    .findOne( {_id: new objectId(id)});

    return movie;

}


async function getWinners(score){
    //console.log(score)
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                    .db(DATABASE)
                    .collection(MOVIES)
                    .find( { "awards.wins": Number(score)})
                    .toArray()

    // Quise hacer la proyección en el mismo query, después del find
    // Lo terminé procesando por separado porque algo no estaba funcionando bien

    const projection = movies.map(
        (movie) => {
            const object = {
                title: movie.title,
                poster: movie.title,
                plot: movie.plot
            }

            return object
        }
    )

    return projection;
}


async function getMoviesByLanguage(language, pageSize, page){
    //console.log(language)
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                    .db(DATABASE)
                    .collection(MOVIES)
                    .find( {languages: language}).limit(pageSize).skip(pageSize * page)
                    .toArray();

    return movies;
}

async function getRankedMovies(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                    .db(DATABASE)
                    .collection(MOVIES)
                    .find()
                    .toArray()

    const moviesWithRating = movies.filter((movie) => movie.tomatoes.fresh !== undefined);
    const rankedMovies = moviesWithRating.sort((a,b) => a.tomatoes.fresh - b.tomatoes.fresh);

    return rankedMovies;
}

module.exports = {getAllMovies, getMovie, getWinners, getMoviesByLanguage, getRankedMovies};