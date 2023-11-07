const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',  // Usuario de PostgreSQL
  password: 'root',  // Contraseña de PostgreSQL
  host: 'localhost:90',  // Dirección del servidor de PostgreSQL
  port: 5432,  // Puerto de PostgreSQL (por defecto es 5432)
  database: 'root',  // Nombre de la base de datos
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
