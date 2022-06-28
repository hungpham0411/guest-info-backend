# Manage Items Backend REST API Server

> IMPORTANT: This project is not intended for production environments.
> It was built as an educational exercise and is intended to serve as an educational
> example.

Provides a backend REST API server for managing items in a larger inventory system.

src/openapi.yaml contains the specification for the Manage Items API.

## 1. Normal Use

Go to `src` and run

```bash
yarn
```

to install dependencies

To run the server

```bash
npm run dev-server
```

but, remember to give `environment` variables before run, `environment` variables are in `src/lib/config.js` where each environment variable is assigned with `process.env.<something>`

**Please notice this repository for some reason will not run with `node` but run with `nodemon`, we were not able to find out the reason during our time, you can try it if you want!!!**

## 2. Use via Docker Compose (Recommended, no need to reconfig ENV every run)

## Development

Run docker-compose.dev.yaml to start a binded `nodemon` repository

```bash
docker-compose -f docker-compose.dev.yaml up 
```

Try changing your file and see the message from terminal, it will differ from production execution

- Rebuild image if needed
- 
```bash
docker-compose build 
```

- Terminate the container

```bash
docker-compose down
```

## Production

Download and inspect/configure `docker-compose.yaml`.

Start Docker Compose

```bash
docker-compose up
```

- Rebuild image if needed

```bash
docker-compose build
```

- Terminate the container

```bash
docker-compose down
```

The server will run on `localhost:10350` and you will be able to see server output in the other console.
Visit <http://localhost:15672> to view the RabbitMQ gui.

## 3. Dependencies

Dependencies are managed in a few different files.

- Dockerfile - Base image for backend.
- src/package.json - Node.js dependencies.
- testing/test-runner/Dockerfile - Base image for test-runner.
- testing/test-runner/package.json - Node.js dependencies.

Use [yarn](https://yarnpkg.com/) to manage dependencies in `package.json`.

### 4. Configuration

- `src/openapi.yaml` - Contains the OpenAPI specification of the REST API. It contains metadata related to the API including a version number.
- `src/config.js` - Contains configuration specific to the implementation of the backend.
