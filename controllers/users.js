const users = require('../data/users');

async function getAllUsers(){    
    return users.getAllUsers();
}

async function getUserById(id){    
    return users.getUserById(id);
}

module.exports = {getAllUsers, getUserById};