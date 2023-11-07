// servicioModel.js

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://root:root@localhost:5432/root',
});

class Servicio {
  static async getAllServicios() {
    const query = 'SELECT * FROM servicios';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getServicioById(id) {
    const query = 'SELECT * FROM servicios WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async createServicio(nombre, descripcion) {
    const query = 'INSERT INTO servicios (nombre, descripcion) VALUES ($1, $2) RETURNING *';
    const values = [nombre, descripcion];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async updateServicio(id, nombre, descripcion) {
    const query = 'UPDATE servicios SET nombre = $2, descripcion = $3 WHERE id = $1 RETURNING *';
    const values = [id, nombre, descripcion];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteServicio(id) {
    const query = 'DELETE FROM servicios WHERE id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = Servicio;
