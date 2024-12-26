FROM node:23.3.0-bookworm-slim

RUN apt update && apt install -y git openssh-client

RUN git config --global core.autocrlf input

WORKDIR /app
EXPOSE 3000

RUN mkdir -p /root/.ssh && \
    chmod 700 /root/.ssh && \
    eval "$(ssh-agent -s)"

CMD npm install && npm run dev