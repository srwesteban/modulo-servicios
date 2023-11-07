# Usa una imagen base con Node.js preinstalado
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 3000 (el puerto en el que probablemente se ejecute tu aplicación React)
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
