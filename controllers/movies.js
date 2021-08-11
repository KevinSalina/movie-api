const movies = require('../movies')

const getAllMovies = (req, res) => {
  res.send(movies)
}


module.exports = { getAllMovies }