const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',  
  password: 'root',  
  host: 'localhost:80',  
  port: 5432,  
  database: 'root',  
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
