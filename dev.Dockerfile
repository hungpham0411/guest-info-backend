# Dockerfile for building container for the Items REST API backend server.

# NODE_IMAGE is passed when building the container. That way we don't hardcode
# the image or its version that this container is based on.
FROM node:14-alpine

# /app will hold our application. Create it and make it our working directory.
WORKDIR /usr/src/app

# Install dependencies.
COPY ./src/package.json ./src/yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "dev-server"]