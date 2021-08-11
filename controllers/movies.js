const movies = require('../movies')

const getAllMovies = (req, res) => {
  res.send(movies)
}

const searchByTitleAndDirector = (req, res) => {
  const qSearch = req.params.query.toLowerCase()

  const movieResults = movies.filter(movie => movie.title.toLowerCase().includes(qSearch))

  const directorResults = movies.filter(movie => {
    for (director of movie.directors) {
      if (director.toLowerCase().includes(qSearch)) {
        return movie
      }
    }
  })

  const combinedResults = movieResults.concat(directorResults)

  res.send(combinedResults)

}

const createNewMovie = (req, res) => {
  const { title, directors, releaseDate, rating, runTime, genres } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return res.status(400).send('Missing Movie Data!!')
  }

  const newMovie = { title, directors, releaseDate, rating, runTime, genres }

  movies.push(newMovie)

  res.send(newMovie)
}


module.exports = { getAllMovies, searchByTitleAndDirector, createNewMovie }