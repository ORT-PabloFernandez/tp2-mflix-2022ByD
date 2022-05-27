const movies = require('../data/movies');
const { all } = require('../routes/movies');

async function getAllMovies(pageSize, page) {
    return movies.getAllMovies(pageSize, page);
}

async function getMovie(id) {
    return movies.getOneMovie(id);
}

async function getMovieByAward(pageSize, page) {
    let allMovies = await movies.getAllMovies(pageSize, page);
    let awardMovies = allMovies.filter(movie => movie.awards.wins >= 1);
    let mapMovies = awardMovies.map(movie => ({ title: movie.title, poster: movie.poster, plot: movie.plot }));
    return mapMovies;

}

async function getMovieByLanguage(language, pageSize, page,) {
    let allMovies = await movies.getAllMovies(pageSize, page);

    let moviesWithoutUndefined = allMovies.filter(movie => movie.languages != undefined);

    let moviesByLanguage = [];

    moviesWithoutUndefined.forEach(movie => {
    let conditional = false;
    
    movie.languages.forEach(movieLanguage => {

    if(movieLanguage == language){
        conditional = true;



        if(conditional == true){
            moviesByLanguage.push(movie);
        }
    }
    })

    });

    return moviesByLanguage;

}

async function getMovieByTomatoes(pageSize, page) {
    let allMovies = await movies.getAllMovies(pageSize, page);
    let moviesByTomatoes = allMovies.sort((movieA, movieB) => (movieA.tomatoes.fresh > movieB.tomatoes.fresh) ? -11:1);
    return moviesByTomatoes;

}




module.exports = { getAllMovies, getMovie, getMovieByAward, getMovieByLanguage, getMovieByTomatoes };

