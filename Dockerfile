# Usa la imagen base oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "preview"]
