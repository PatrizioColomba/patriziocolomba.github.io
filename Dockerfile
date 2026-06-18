FROM node:25.9.0-trixie-slim

RUN apt-get update && apt-get install -y git openssh-client && rm -rf /var/lib/apt/lists/*

RUN git config --global core.autocrlf input

WORKDIR /app
EXPOSE 3000

RUN mkdir -p /root/.ssh && \
    chmod 700 /root/.ssh && \
    eval "$(ssh-agent -s)"

CMD ["sh", "-c", "npm install && npm run dev"]