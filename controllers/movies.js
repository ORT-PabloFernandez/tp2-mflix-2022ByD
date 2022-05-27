const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovies(id){
    return movies.getMovies(id)
}


async function getMoviesIdioma(languages){
   let moviesIdioma = await movies.getAllMovies(10,1)
   let prueba = moviesIdioma
   .filter(movie => movie.languages == languages)
   return prueba
}

async function getMoviesWin(){
   let moviesWin = await movies.getAllMovies(10,1)
   let prueba = moviesWin
   .filter(movie => movie.awards.wins >= 1)
   .map(movie =>({
    title: movie.title,
    poster: movie.poster,
    plot: movie.plot,
   }))
   return prueba
}

async function getMoviesFresh(){
    let moviesWin = await movies.getAllMovies(10,2)
    let prueba = moviesWin
    .filter(movie => movie.tomatoes.fresh)
    .sort((movieA, movieB) => movieB.tomatoes.fresh - movieA.tomatoes.fresh)
    return prueba
 }

module.exports = {getAllMovies,getMovies,getMoviesWin,getMoviesIdioma, getMoviesFresh};