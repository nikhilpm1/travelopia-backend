const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/bookings/list', db.getUsers)

app.post('/booking/create', db.createUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  