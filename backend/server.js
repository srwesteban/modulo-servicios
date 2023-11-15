const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4000', // Reemplaza con el origen de la aplicación React
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
}));

const servicioRoutes = require('./src/app/routes/servicioRoutes');

app.use('/servicios', servicioRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
