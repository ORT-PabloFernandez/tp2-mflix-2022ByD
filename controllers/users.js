const users = require('../data/users');

async function getUserComments(id, pageSize, page){
    return users.getCommentsByUser(id, pageSize, page);
}

async function getAllUsers(pageSize, page){
    return users.getAllUsersfromDb(pageSize, page);
}

module.exports = {getUserComments, getAllUsers};
