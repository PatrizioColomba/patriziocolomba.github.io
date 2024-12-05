 FROM node:23.3.0-alpine3.19
 WORKDIR /app
 EXPOSE 3000
 CMD npm install && npm run dev