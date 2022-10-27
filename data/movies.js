const { ObjectID } = require('bson');
const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';


//me retorna la lista de peliculas 
async function getAllMovies(pageSize, page){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
                        .db(DATABASE)
                        .collection(MOVIES)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return movies;
}

//me retorna una pelicula por ID
async function getMoviebByID(id){
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({_id: ObjectID(id)})
        .toArray();
    return movie; 
}

//me retorna las peliculas con premios
// Los desarrolladores de frontend están haciendo una pantalla 
// para mostrar solo las películas ganadoras de al menos un premio. 
// Necesitamos que desarrolles el endpoint respectivo. 
// Solo necesita el titulo, el poster y el resumen de la reseña ( plot )
async function getMovieAwards(){
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .filter((movie) => movie.awards.wins > 0 )
    .toArray();

     const moviesFinal = movies.map((m) => ({
        title: m.title,
        plot: m.plot, 
        poster: m.poster
     }));
    
     return moviesFinal;  
}

// Necesitamos un punto final que nos devuelva las peliculas filtradas por idioma.
// Toma en cuenta que estas películas pueden ser muchas y el desarrollador de frontend 
// va a mostrar las paginadas.

async function getMovieByLanguages(languages) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ languages: { $in: [languages]}})
        .toArray(); 
    return movies; 
}

// Hay una calificación propia de las peliculas denominadas
//  tomates la base de datos de peliculas actual solo otorga 
//  el puntaje fresco en determinadas condiciones (no interesa en este caso). 
//  El equipo de frontend está desarrollando un ranking basado en esta calificación. 
//  Te piden desarrollar un endpoint que devuelva las películas ordenadas de mayor a menor
//  considerando el puntaje fresco

async function getMovieFresh() {
    const connectiondb = await conn.getConnection(); 
    const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ "tomatoes.fresh": { $ne: null}})
    .toArray(); 

    const moviesFinal= movies.sort((a, b) => b.tomatoes.fres - a.tomatoes.fresh);

    return moviesFinal;
}

module.exports = {
    getAllMovies, 
    getMoviebByID, 
    getMovieAwards,
    getMovieByLanguages,
    getMovieFresh, 

};