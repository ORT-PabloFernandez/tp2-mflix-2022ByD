const conn = require("./conn");
const DATABASE = "sample_mflix";
const MOVIES = "movies";
const COMMENTS = "comments";
const USER = "users";
const objectId = require("mongodb").ObjectId;

async function getAllMovies(pageSize, page) {
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

async function getAllMoviesPorID(id) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ _id: new objectId(id) })
    .toArray();
  return movies;
}

/* > > 2. Los desarrolladores de frontend estan haciendo un pantalla para mostrar 
solo las películas ganadoras de al menos un premio. Necesitamos que desarrolles el 
endpoint respectivo. Solo necesitan el titulo, el poster y el resumen de la reseña (**plot**)*/

async function getAllMoviesGanadoras(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ "awards.wins": { $gte: 1 } })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();

  let respuesta = movies.map((ganadores) => ({
    title: ganadores.title,
    poster: ganadores.poster,
    plot: ganadores.plot,
  }));
  return respuesta;
}

/* > 3. Necesitamos un endpoint que nos devuelva las peliculas filtradas por idioma. Toma en cuenta 
que estas películas pueden ser muchas y el desarrollador de frontend va mostrarlas paginadas. */

async function getAllMoviesPorIdioma(idioma, pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ languages: idioma })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return movies;
}

/* > 4. Hay un calificación propia de las peliculas denomidada 
[tomatoes](https://es.wikipedia.org/wiki/Rotten_Tomatoes) la base de datos de 
peliculas actual solo otorga el puntaje **fresh** en determinadas condiciones 
(no interesa en este caso). El equipo de frontend esta desarrollando un ranking 
basado en esta calificación. Te piden desarrollar un endpoint que devuelva las 
películas ordenadas de mayor a menor considerando el puntaje **fresh** */
async function getAllMoviesPorfresh(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find()
    .sort({ "tomatoes.fresh": -1 })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();

  return movies;
}

module.exports = {
  getAllMovies,
  getAllMoviesPorID,
  getAllMoviesGanadoras,
  getAllMoviesPorIdioma,
  getAllMoviesPorfresh,
};
