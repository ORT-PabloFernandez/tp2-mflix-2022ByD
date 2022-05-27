const users = require('../data/users');
const comments = require('../data/comments');
const movies = require('../data/movies');

async function getUserComments(id) {
    const result = [];
    const user = await users.getUserById(id);

    const allComents = await comments.getCommentsByUserEmail(user.email);
    
    // no pude hacerlo con un allComments.forEach( ()=> {}) o .map() por la llamada async adentro. Tampoco funcionó el await Promise.all()
    for(const currentComment of allComents){
        const movie = await movies.getMovieById(currentComment.movie_id)
        if (movie){
            result.push({
                movie_title: movie.title,
                comment: currentComment.text,
                movie_poster: movie.poster
            })
        }
   
    }
  
    return result;
    
}

module.exports = {getUserComments};