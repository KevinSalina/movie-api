const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const movies = require('./movies')
const { getAllMovies, searchByTitleAndDirector, createNewMovie } = require('./controllers/movies')

// Body Parser into JSON
app.use(bodyParser.json())

// Home route
app.get('/movies', getAllMovies)

// Search by Director or Title
app.get('/movies/:query', searchByTitleAndDirector)

// Create New Movie
app.post('/movies', createNewMovie)

// Set up port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})