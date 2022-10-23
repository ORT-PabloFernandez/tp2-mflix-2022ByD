const conn = require("./conn");
const { ObjectID } = require("bson");
const DATABASE = "sample_mflix";
const MOVIES = "movies";

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

async function getAllMovies() {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .toArray();
  return movies;
}

async function getMovie(id) {
  const connectiondb = await conn.getConnection();
  const movie = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({ _id: new ObjectID(`${id}`) })
    .toArray();
  console.log(id);
  console.log(movie);
  return movie;
}

async function getWinnerMovies() {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .toArray();
  let moviesAwards = [];
  const moviesFiltered = movies.filter((movie) => movie.awards.wins >= 1);

  moviesFiltered.map((m) => {
    let movie = {
      title: m.title,
      poster: m.poster,
      plot: m.plot,
      wins: m.awards.wins,
    };
    moviesAwards.push(movie);
  });

  return moviesAwards;
}

async function moviesByLanguage(pageSize, page, language) {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  console.log(movies);
  let arrayNuevo = [];
  const movieFilter = movies
    .filter((item) => item.languages !== undefined)
    .filter((movie) => movie.languages.find((l) => l === language));
  movieFilter.map((item) => {
    const movie = {
      title: item.title,
      poster: item.poster,
      plot: item.fullplot,
      language: item.languages,
    };
    arrayNuevo.push(movie);
  });

  return arrayNuevo;
}

async function rankTomatoes() {
  const connectiondb = await conn.getConnection();
  const movies = await connectiondb
    .db(DATABASE)
    .collection(MOVIES)
    .find({})
    .toArray();

  return await movies
    .filter(
      (item) => item.tomatoes !== undefined && item.tomatoes.fresh !== undefined
    )
    .sort((a, b) => {
      return b.tomatoes.fresh - a.tomatoes.fresh;
    });
}

module.exports = {
  getAllMovies,
  getMovie,
  getWinnerMovies,
  moviesByLanguage,
  rankTomatoes,
};
