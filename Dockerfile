 FROM node:23.3.0-bookworm-slim
 WORKDIR /app
 EXPOSE 3000
 CMD npm install && npm run dev