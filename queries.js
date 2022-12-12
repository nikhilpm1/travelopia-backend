const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'travelopia_users',
  password: 'nikhilpm',
  port: 5432,
})

const getAllBookings = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createBooking = (request, response) => {
    const { first_name,last_name, email, country, no_of_persons, budget } = request.body
  
    pool.query('INSERT INTO users (first_name,last_name, email, country, no_of_persons, budget) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [first_name,last_name, email, country, no_of_persons, budget], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User created with ID: ${results.rows[0].id}`)
    })
  }

  module.exports = {
    getAllBookings,
    createBooking,
  }