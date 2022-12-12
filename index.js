const express = require('express')

const app = express()

const port = 3001




app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  