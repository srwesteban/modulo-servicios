const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Puedes configurar el puerto que desees

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Importa el módulo de CORS
const cors = require('cors');

// Configura CORS para permitir solicitudes desde el origen de tu aplicación React
app.use(cors({
  origin: 'http://localhost:4000', // Reemplaza con el origen de tu aplicación React
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
}));

// Importa las rutas de los servicios
const servicioRoutes = require('./src/app/routes/servicioRoutes');

// Rutas de los servicios
app.use('/servicios', servicioRoutes);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
