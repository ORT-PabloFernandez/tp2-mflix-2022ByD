const comments = require("../data/comments");

async function getAllComments(pageSize, page) {
  return comments.getAllComments(pageSize, page);
}

module.exports = { getAllComments };
