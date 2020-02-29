FROM node:13 as builder

RUN mkdir -p /app

COPY package.json /app

WORKDIR /app

RUN yarn

COPY . .

RUN yarn build

FROM node:13-slim

RUN mkdir -p /app

WORKDIR /app

COPY --from=builder /app/build .
COPY --from=builder /app/node_modules .
COPY --from=builder /app/server.js .

CMD ["node", "server.js"]