const { ObjectID } = require('bson');
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

async function getMovie(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .findOne({_id: ObjectID(id)})

    return movie;
}

async function getMovieWithAwards(){
    const connectiondb = await conn.getConnection();
    const moviesWithAwards = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'awards.wins': {$gte: 1}})//.limit(10).skip(10 * 1) //--> Uncomment to test it quicker
                        .toArray();

    const moviewsWithAwardsLessProps = moviesWithAwards.map(movie => {
        return {title: movie.title, poster: movie.poster, plot: movie.plot};
    });

    return moviewsWithAwardsLessProps
}

async function getAllMoviesByLanguage(pageSize, page, language){
    const connectiondb = await conn.getConnection();
    const moviesByLanguage = await connectiondb
                                    .db(DATABASE)
                                    .collection(MOVIES)
                                    .find({languages: language}).limit(pageSize).skip(pageSize * page)
                                    .toArray()

    return moviesByLanguage;
}

async function getAllMoviesByFresh(){
    const movies = await getAllMovies(0,0)

    movies.forEach(movie => movie.tomatoes = (movie.tomatoes === undefined) ? {} : movie.tomatoes)
    movies.forEach(movie => movie.tomatoes.fresh = (movie.tomatoes.fresh === undefined) ? 0 : movie.tomatoes.fresh)
    const moviesByFresh = movies.sort((a, b)=> b.tomatoes.fresh - a.tomatoes.fresh);

    return moviesByFresh;                                
}

module.exports = {getAllMovies, getMovie, getMovieWithAwards, getAllMoviesByLanguage, getAllMoviesByFresh};