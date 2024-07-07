 # Usa un'immagine base di Node.js
 FROM node:latest

 # Imposta la directory di lavoro all'interno del container
 WORKDIR /app

 EXPOSE 3000

 # Comando di default
 CMD npm install && npm start