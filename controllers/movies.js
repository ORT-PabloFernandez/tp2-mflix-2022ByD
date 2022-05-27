const movies = require('../data/movies');


async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

// 1 - Necesitamos un endpoint que nos devuelva una película (movie) particular por _id

async function getMovie (id) {

    return movies.getMovie(id);
}

// 2 - 
async function getMovieConPremios () {

    return movies.getMovieConPremios();
}

// 3 -


async function getMovieLenguage(language, pageSize, page) {
    return movies.getMovieLenguage(language, pageSize, page);
  }


  // 4- 

  async function getMoviesPorTomatoes(){
      return movies.getMoviesPorTomatoes();
  }

  
module.exports = {getAllMovies, getMovie, getMovieConPremios,getMovieLenguage,getMoviesPorTomatoes};