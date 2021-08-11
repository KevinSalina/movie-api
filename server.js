const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const movies = require('./movies')
const { getAllMovies } = require('./controllers/movies')

// Body Parser into JSON
app.use(bodyParser.json())

// Home route
app.get('/movies', getAllMovies)

// Search by Director or Title
app.get('/movies/:query', (req, res) => {
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

})

// Create New Movie
app.post('/movies', (req, res) => {
  const { title, directors, releaseDate, rating, runTime, genres } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return res.status(400).send('Missing Movie Data!!')
  }

  const newMovie = { title, directors, releaseDate, rating, runTime, genres }

  movies.push(newMovie)

  res.send(newMovie)
})



// Set up port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})