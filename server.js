const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const movies = require('./movies')
const { getAllMovies } = require('./controllers/movies')

// Home route
app.get('/movies', getAllMovies)


// Get by Title
app.get('/movies/:title', (req, res) => {
  const titleSearch = req.params.title.toLowerCase()

  const movieResults = movies.filter(movie => movie.title.toLowerCase().includes(titleSearch))

  console.log(movieResults)

  res.send(movieResults)

})

// Set up port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})