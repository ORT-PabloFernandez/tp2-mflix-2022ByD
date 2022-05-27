const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id){
    return movies.getMovie(id);
}

async function getWins(){
    let allMovies = await movies.getAllMovies(20, 1);
        let movieWin = allMovies
                    .filter(movie => movie.awards.wins >= 1)
                    .map(movie => ({
                          title: movie.title,
                         poster: movie.poster,
                         resumen: movie.plot,
                          }))
      return movieWin;
}

async function getLenguage(lenguage){
    let allMovies = await movies.getAllMovies(50, 1);
        let movieLenguage = allMovies             
    return movieLenguage;
}

async function getRanking(){
    let allMovies = await movies.getAllMovies(20, 1);
        let movie = allMovies
                        .filter(movies => movies.tomatoes.fresh)
                        .sort((moviesA,moviesB) => moviesB.tomatoes.fresh - moviesA.tomatoes.fresh)
    return movie;
}



module.exports = {getAllMovies,getMovie,getWins,getLenguage,getRanking};