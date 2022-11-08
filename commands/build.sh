#!/usr/bin/env bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

cd "$SCRIPT_DIR/.."
PROJECT_NAME="$( basename "$( pwd )" )"
docker build -t "$PROJECT_NAME" "${SCRIPT_DIR}"/../src
