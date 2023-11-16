# modulo-servicios

Pasos para iniciar la aplicación de manera local:
1. Abrir la terminal.
2. Ir al directorio "backend" con el comando: `cd backend`.
3. Ejecutar el comando: `npm start`.
4. Abrir otra terminal.
5. Ir al directorio "frontend" con el comando: `cd frontend`.
6. Ejecutar el comando: `npm start`.

Nota:
- El backend se despliega automáticamente en el puerto 3000 y se conecta al frontend a través del endpoint http://localhost:4000.

- El frontend debe desplegarse en el puerto 4000 o ser reemplazado por el puerto donde se ejecute la aplicación. Puedes hacer este cambio en la línea 11 del archivo server.js en la carpeta "backend".

Ejemplo:
  origin: 'http://localhost:4000', // Reemplaza con el origen de la aplicación React

Pasos para iniciar la aplicación mediante DOCKER:
1. Abrir la terminal.
2. Ir al directorio "backend" con el comando: `cd backend`.
3. Ejecutar el comando: `docker-compose up`.
4. Abrir otra terminal.
5. Ir al directorio "frontend" con el comando: `cd frontend`.
6. Ejecutar el comando: `docker-compose up`.

Nota: si no se visualiza el resultado de la base de datos por el http://localhost:3000/servicios 
es que no se cargo correctamente probablemente porque los datos estan en la carpeta data del backend.
