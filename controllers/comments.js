const comments = require('../data/comments');
const movieController = require('./movies');

async function getCommentsByUser(id){
    const commentsByUser = await comments.getCommentsByUser(id);
    const fullComment = await getFullComment(commentsByUser);

    return fullComment;
}

async function getFullComment(comments){
    const fullComment = await Promise.all(comments.map(async comment =>{
        const movie = await movieController.getMovie(comment.movie_id.toHexString());

        return{
                title: (movie) ? movie.title : undefined,
                poster: (movie) ? movie.poster : undefined,
                name: comment.name,
                text: comment.text
            }
        }));
    
        return fullComment;
}

module.exports = {getCommentsByUser}