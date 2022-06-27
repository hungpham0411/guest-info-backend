#!/usr/bin/env bash

set -e

PROJECT_ROOT="$(git rev-parse --show-toplevel)"

"${PROJECT_ROOT}/devtools/squash/bin/run.sh"
