FROM node:25.0.0-alpine3.21

RUN apk update && apk add --no-cache git openssh

RUN git config --global core.autocrlf input

WORKDIR /app
EXPOSE 3000

RUN mkdir -p /root/.ssh && \
    chmod 700 /root/.ssh && \
    eval "$(ssh-agent -s)"

CMD ["sh", "-c", "npm install && npm run dev"]