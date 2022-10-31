#!/usr/bin/env bash

PROJECT_ROOT="$(git rev-parse --show-toplevel)"

cd "$PROJECT_ROOT" || exit 1
docker compose down
