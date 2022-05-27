const users = require("../data/users");
const movies = require("../data/movies");
const objectId = require("mongodb").ObjectId;
async function getUsers() {
    return users.getUsers();
  }
  async function getCommentsId(id) {
   let response = [];
   let user =  await users.getUserId(id);
   let comments = await users.getCommentsEmail(user[0].email);
   comments.map(async  c =>{
    let movie = await movies.getMovieId(c._id)
    let comment = {
        movie: movie.title,
        name : c.name,
        comment: c.text
    }
    response.push(comment)
   })
   return response;
  }
  module.exports = { getUsers,getCommentsId };
