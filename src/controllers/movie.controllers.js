const catchError = require('../utils/catchError');
const movies = require('../models/Movies');
const Genres = require('../models/Genres');
const Actors = require('../models/Actors');
const Directors = require('../models/Directors');

const getAll = catchError(async(req, res) => {
    const results = await movies.findAll({include: Genres});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await movies.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movies.findByPk(id, {include: Genres, Actors, Directors });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movies.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movies.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setGenres = catchError(async(req, res) => {
    //search movie by id
    const { id } = req.params
    const movie = await movies.findByPk(id)
    //check if movie exists
    if(!movie) return res.sendStatus(404)
    //set genres
    //await movie.setGenres(req.body)
    await movie.setGenres(req.body)
    //get genres
    const genres = await movie.getGenres()
    return res.json(genres)
})

const setActors = catchError(async(req, res) => {
    //search movie by id
    const { id } = req.params
    const movie = await movies.findByPk(id)
    //check if movie exists
    if(!movie) return res.sendStatus(404)
    //set Actorss
    //await movie.setGenres(req.body)
    await movie.setActors(req.body)
    //get genres
    const actors = await movie.getActors()
    return res.json(actors)
})

const setDirectors = catchError(async(req, res) => {
    //search movie by id
    const { id } = req.params
    const movie = await movies.findByPk(id)
    //check if movie exists
    if(!movie) return res.sendStatus(404)
    //set genres
    //await movie.setGenres(req.body)
    await movie.setDirectors(req.body)
    //get genres
    const directors = await movie.getDirectors()
    return res.json(directors)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenres,
    setActors,
    setDirectors
}