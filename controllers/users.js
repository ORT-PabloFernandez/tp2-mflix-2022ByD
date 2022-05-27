const users = require('../data/users');
const comments = require('../data/comments');
const movies = require('../data/movies');

async function getAllUsers(pageSize, page) {
  return users.getAllUsers(pageSize, page);
}

async function getCommentsFromUser(userId) {
  const user = await users.getUserById(userId);
  const commentsByUser = await comments.getCommentsByEmailUser(user.email);
  const movie = await movies.getMovieById(commentsByUser.movie_id);
  return {
    comments: commentsByUser.text,
    title: movie.title,
    poster: movie.poster,
  };
}

module.exports = {
  getCommentsFromUser,
  getAllUsers,
};
