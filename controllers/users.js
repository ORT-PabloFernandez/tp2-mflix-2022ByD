const users = require('../data/users');
const comments = require('../data/comments');

async function getAllUsers(pageSize, page) {    
    return users.getAllUsers(pageSize, page);
}

async function getUserById(user_id){ 
    user_result = users.getUserById(user_id);
    comments_by_user = comments.getCommentsByUserId(user_id);
    user_result.comments = comments_by_user;
    return user_result;
}

module.exports = {getAllUsers, getUserById};