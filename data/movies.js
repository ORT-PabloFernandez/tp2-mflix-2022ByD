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

async function getOnlyAwardedMovies(min, pageSize, page){
    const connectiondb = await conn.getConnection(); 
	const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find( {"awards.wins": { $gte: min } }).limit(pageSize).skip(pageSize * page).sort("awards.wins")
                        .toArray()

    return movies.map( e => {
                        let nuevo = {
                            title: e.title, 
                            poster: e.poster,
                            plot: e.plot,
                            awards: e.awards.wins
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
                        .find({"tomatoes.fresh":{$exists:true}}).limit(pageSize).skip(pageSize * page).sort({"tomatoes.fresh": -1})
                        .toArray();    

    return movies.map(e =>{
                    let nuevo = {
                        title: e.title,
                        fresh: e.tomatoes.fresh
                    }
                    return nuevo
    });
}

module.exports = {getAllMovies, getMovie, getOnlyAwardedMovies, getFilteredLang, getSortedFresh};