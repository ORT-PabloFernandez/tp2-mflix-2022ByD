const movies = require('../data/movies');

async function getAllMovies(pageSize, page) {
    return movies.getAllMovies(pageSize, page);
}

async function getMovieId(id) {
    return movies.getMovieId(id);
}

async function getGanadoras(minPremios, pageSize, page) {

    let movies_ganadoras = await movies.getGanadoras(minPremios, pageSize, page);

    let movies_edit = movies_ganadoras.map(peli => ({
        titulo: peli.title,
        poster: peli.poster,
        resumen: peli.plot
    }
    )
    )

    return movies_edit;
}

async function getXIdioma(idioma, pageSize, page) {
    return movies.getXIdioma(idioma, pageSize, page);
}

async function getOrdFresh(pageSize, page) {
    let pelis = await movies.getOrdFresh(pageSize, page);
    return pelis.sort((peli1, peli2) => parseInt(peli2.tomatoes.fresh) - parseInt(peli1.tomatoes.fresh));
}

async function getAllUsers(pageSize, page) {
    return movies.getAllUsers(pageSize, page);
}

async function getUserId(id) {
    return movies.getUserId(id);
}

async function getAllComments(pageSize, page) {
    console.log('ok')
    return movies.getAllComments(pageSize, page);
}

async function getCommentsByUser(user) {
    return movies.getCommentsByUser(user);
}

async function getCome(user) {
    let usuario = await movies.getUserId(user)

    let comentarios = await getCommentsByUser(usuario[0].name)


    let comentarios_edit = comentarios.map( com => ({
        comentario: com.text,
        titulo: getMovieId(com.movie_id).title,
        poster: getMovieId(com.movie_id).poster,
    }
    ))



    console.log(comentarios_edit)
    return comentarios;
}


module.exports = { getAllMovies, getMovieId, getGanadoras, getXIdioma, getOrdFresh, getAllUsers, getUserId, getAllComments, getCome, getCommentsByUser };