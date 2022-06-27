#!/usr/bin/env bash

PROJ_DIR="$(git rev-parse --show-toplevel)"
docker run --interactive --rm -v "${PROJ_DIR}:/w" -w /w lint-json-files:local
