const users = require("../data/users");

async function getAllUsers(pageSize, page) {
  return users.getAllUsers(pageSize, page);
}

async function getCommentsByUserId(id) {
  return users.getCommentsByUserId(id);
}
module.exports = { getAllUsers, getCommentsByUserId };
