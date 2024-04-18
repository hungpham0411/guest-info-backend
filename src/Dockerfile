# Dockerfile for building container for the Items REST API backend server.

# NODE_IMAGE is passed when building the container. That way we don't hardcode
# the image or its version that this container is based on.
FROM node:16-alpine as build

# /app will hold our application. Create it and make it our working directory.
WORKDIR /app

# Install dependencies.
COPY ./src/package.json ./
RUN yarn install

###
FROM node:16-alpine
WORKDIR /app
# Best practice: Don't run as root. Instead run as node (created in node image)
RUN chown -R node:node .
USER node
COPY --from=build --chown=node:node /app/node_modules ./src/node_modules
COPY --chown=node:node ./lib/openapi.yaml ./lib/openapi.yaml
COPY --chown=node:node ./src ./src

ENV NODE_ENV=production
WORKDIR /app/src
CMD [ "yarn", "dev-server" ]
