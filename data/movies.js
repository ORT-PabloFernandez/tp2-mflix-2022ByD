const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_mflix';
const MOVIES = 'movies';
const USERS = 'users';
const COMMENTS = 'comments';


async function getAllMovies(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({}).limit(pageSize).skip(pageSize * page)
        .toArray();
    return movies;
}

async function getMovieId(id) {
    const connectiondb = await conn.getConnection();
    const movie = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .findOne({ _id: new ObjectId(id) });
    return movie;
}

async function getGanadoras(minPremios, pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ "awards.wins": { $gte: minPremios } })
        .limit(pageSize)
        .skip(pageSize * page)
        .toArray();
    return movies;
}

async function getXIdioma(idioma, pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ languages: idioma })
        .limit(pageSize)
        .skip(pageSize * page)
        .toArray();
    return movies;
}

async function getOrdFresh(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const movies = await connectiondb
        .db(DATABASE)
        .collection(MOVIES)
        .find({ "tomatoes.fresh": { $exists: true } })
        .limit(pageSize)
        .skip(pageSize * page)
        .toArray();
    return movies;
}


async function getAllUsers(pageSize, page) {
    const connectiondb = await conn.getConnection();
    const users = await connectiondb
        .db(DATABASE)
        .collection(USERS)
        .find({}).limit(pageSize).skip(pageSize * page)
        .toArray();
    return users;
}


async function getUserId(id) {
    const connectiondb = await conn.getConnection();
    const user = await connectiondb
        .db(DATABASE)
        .collection(USERS)
        .find({ _id: new ObjectId(id) })
        .toArray();
    return user;
}

async function getAllComments(pageSize, page) {
    const connectiondb = await conn.getConnection();
    console.log('ok')
    const comments = await connectiondb
        .db(DATABASE)
        .collection(COMMENTS)
        .find({}).limit(pageSize).skip(pageSize * page)
        .toArray();
    return comments;
}

async function getCommentsByUser(user) {
    const connectiondb = await conn.getConnection();
    const comments = await connectiondb
        .db(DATABASE)
        .collection(COMMENTS)
        .find({name: user})
        .toArray();
    return comments;
}


module.exports = { getAllMovies, getMovieId, getGanadoras, getXIdioma, getOrdFresh, getAllUsers, getUserId,getAllComments, getCommentsByUser};