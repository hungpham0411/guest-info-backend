# Developer Cheat Sheet

## Build

Generates a Docker image of the GuestInfoBackend server.

**Use this command if you do not yet have a Docker image or you have modified files in `src`.**

```bash
commands/build.sh
```

## Up

Starts a locally running GuestInfoBackend server, along with a MongoDB database, a RabbitMQ message queue, and networks to connect them.

This will continue to run, and generate logging messages, in your terminal until it is terminated with Ctrl+C.

```bash
commands/up.sh
```

## Down

Removes the Docker containers and networks. 

The database will be emptied of all data.

```bash
commands/down.sh
```

## Rebuild

Takes down Docker containers and networks, rebuilds the Docker image for the server, and starts the Docker containers and networks.

**Use this command if you have modified files in `src` and want to restart the local server.** If you have not modified files in `src` and simply want to restart the server, use `commands/restart.sh` (see below).

This will continue to run, and generate logging messages, in your terminal until it is terminated with Ctrl+C.

```bash
commands/rebuild.sh
```

## Restart

Takes down Docker containers and networks and restarts the Docker containers and networks.

**Use this command if you have not modified files in `src` and want to restart the local server.** If you have modified files in `src` and want to restart the server, use `commands/rebuild.sh` (see above).

This will continue to run, and generate logging messages, in your terminal until it is terminated with Ctrl+C.

```bash
commands/restart.sh
```

## Squash commits to prepare for merge into main

Before merging a merge request, use the following command to squash its
commits into a single commit, writing a good conventional-commit message.

```bash
commands/premerge-squash.sh
```
