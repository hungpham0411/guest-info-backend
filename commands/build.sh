#!/usr/bin/env bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

cd "$SCRIPT_DIR/.." || exit
PROJECT_NAME="$( basename "$( pwd )" )"
docker rmi -f guestinfobackend:latest
docker build -t "$PROJECT_NAME" -f "${SCRIPT_DIR}/../src/Dockerfile" .
