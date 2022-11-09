# Dockerfile for building container for the Items REST API backend server.

# NODE_IMAGE is passed when building the container. That way we don't hardcode
# the image or its version that this container is based on.
FROM node:14-alpine as build

# /app will hold our application. Create it and make it our working directory.
WORKDIR /src

# Install dependencies.
COPY ./package.json ./yarn.lock ./
RUN yarn install

###
FROM node:14-alpine
WORKDIR /usr/src/app
# Best practice: Don't run as root. Instead run as node (created in node image)
RUN chown -R node:node .
USER node
COPY --from=build --chown=node:node /src/node_modules ./src/node_modules
COPY --chown=node:node . .

ENV NODE_ENV=production
WORKDIR /usr/src/app/src
CMD [ "yarn", "dev-server" ]
