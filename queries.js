const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'travelopia_users',
  password: 'nikhilpm',
  port: 5432,
})

