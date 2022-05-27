const comments = require('../data/comments');

async function getAllComments() {    
    return comments.getAllComments();
}

module.exports = {getAllComments};