const users = require('../data/users');

async function getAllUsers(){    
    return users.getAllMovies();
}

async function getCommets(id){  
    let movies = [];  
    const user = users.getUserId(id);
    const comments = commets.getCommetsUser(user.name);
    movie.push({
        comment: comments.text,
        movieTitle: findMovie(comments.movie_id)
     })
}

module.exports = {getAllUsers, getCommets}