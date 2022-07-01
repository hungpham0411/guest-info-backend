#!/usr/bin/env bash

PROJ_DIR="$(git rev-parse --show-toplevel)"
docker run -it --rm -v "${PROJ_DIR}:/w" -w /w build:local /bin/bash
