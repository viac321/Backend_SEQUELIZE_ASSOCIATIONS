const express = require('express');
const routerGenres = require('./genres.router');
const routerActors = require('./actors.router');
const routerMovies = require('./movies.router');
const routerDirectors = require('./directors.router');
const router = express.Router();

// colocar las rutas aquí

router.use('/genres', routerGenres)
router.use('/actors', routerActors)
router.use('/movies', routerMovies)
router.use('/directors', routerDirectors)

module.exports = router;