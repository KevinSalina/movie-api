const express = require('express')
const app = express()
const port = 3000



// Set up port
app.listen(port, () => {
  console.log(`Listening om port ${port}`)
})