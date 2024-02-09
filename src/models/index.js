const Actors = require('./Actors');
const Directors = require('./Directors');
const Genres = require('./Genres');
const Movies = require('./Movies');

Genres.belongsToMany(Movies, { through: 'genreMovie' })
Movies.belongsToMany(Genres, { through: 'genreMovie' })

Actors.belongsToMany(Movies, { through: 'actorMovie' })
Movies.belongsToMany(Actors, { through: 'actorMovie' })


Directors.belongsToMany(Movies, { through: 'directorMovie' })
Movies.belongsToMany(Directors, { through: 'directorMovie' })