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

async function getMovie(id){
    const connectiondb = await conn.getConnection();
	const movie = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
				.find({_id: new objectId(id)})
				.toArray();
	return movie
}

async function getOnlyAwardedMovies(min){
    const connectiondb = await conn.getConnection();    
	const movies = await connectiondb
                .db(DATABASE)
                .collection(MOVIES)
                .find( {awards: { wins:{ $gte: min } }})
				.toArray()

    return movies.map( e => {
                        let nuevo = {
                            title: e.title, 
                            poster: e.poster,
                            plot: e.plot
                        }
                        return nuevo
                    })
}

async function getFilteredLang(pageSize, page, lang){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({ languages: lang }).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

async function getSortedFresh(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies.sort( (a, b) => a.tomatoes.fresh - b.tomatoes.fresh );
}

module.exports = {getAllMovies, getMovie, getOnlyAwardedMovies, getFilteredLang, getSortedFresh};