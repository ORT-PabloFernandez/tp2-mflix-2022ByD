const { ObjectId } = require('mongodb');
const conn = require('./conn');
const objectId = require('mongodb').ObjectId;
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

//Películas x ID
async function getMoviesXId(id){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .findOne({'_id': new objectId(id)});
    return movies;
}

//2. Películas con premios: titulo, el poster y el resumen de la reseña (plot)
 async function getMovieAwards(aw){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'awards.wins': { $gte : aw }})
                        .toArray();    

  return movies.map(movie => ({ title: movie.title,
    poster: movie.poster,
    plot: movie.plot}));
 }

// //3. Necesitamos un endpoint que nos devuelva las peliculas filtradas por idioma. Toma en cuenta que estas películas pueden ser muchas y el desarrollador de frontend va mostrarlas paginadas.
 async function getMovieXLanguage(pageSize, page, language){
     const connectiondb = await conn.getConnection();
     const movies = await connectiondb
                         .db(DATABASE)
                         .collection(MOVIES)
                         .find({'languages' :  [language] })
                         .limit(pageSize)
                         .skip(pageSize * page)
                         .toArray();    
     return movies;
}

//4. Hay un calificación propia de las peliculas denomidada tomatoes la base de datos de peliculas actual solo otorga el puntaje fresh en determinadas condiciones (no interesa en este caso). El equipo de frontend esta desarrollando un ranking basado en esta calificación. Te piden desarrollar un endpoint que devuelva las películas ordenadas de mayor a menor considerando el puntaje fresh
async function getMovieRanking(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({'tomatoes.fresh': { $exists : true }})
                        .sort({'tomatoes.fresh' : -1})
                        .toArray();    
  return movies;
 }

module.exports = {getAllMovies, getMoviesXId, getMovieAwards, getMovieXLanguage, getMovieRanking};