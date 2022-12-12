const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3001
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/bookings/list', db.getAllBookings)

app.post('/booking/create', db.createBooking)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  