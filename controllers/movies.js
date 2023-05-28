const movies = require('../data/movies');

async function getAllMovies(pageSize, page){    
    return movies.getAllMovies(pageSize, page);
}


module.exports = {getAllMovies};
/*
const movieController = {
    getAllMovies: async (req,res) => {
        return movies.getAllMovies(pageSize, page);
    },
    
    getMoviesWithAwards:  async (req,res) => {
        return movies.getMoviesWithAwards(pageSize, page);
    },
    
}
*/