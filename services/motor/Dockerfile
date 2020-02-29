FROM node:8

USER root

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

CMD ["node", "index.js"]