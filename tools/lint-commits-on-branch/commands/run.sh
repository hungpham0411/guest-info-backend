#!/usr/bin/env bash

PROJ_DIR="$(git rev-parse --show-toplevel)"
docker run --rm -v "${PROJ_DIR}:/w" -w /w lint-commits-on-branch:local
