FROM node:13 as builder

RUN mkdir -p /app
WORKDIR /app

# Copy source code
COPY . .

# Install and generate node_modules
RUN yarn

# Build react app
RUN yarn build

FROM node:13-slim

RUN mkdir -p /app

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/build/ ./build/
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/server.js .

CMD ["node", "server.js"]