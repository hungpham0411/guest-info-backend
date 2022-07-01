#!/usr/bin/env bash

set -e

PROJECT_ROOT="$(git rev-parse --show-toplevel)"

"${PROJECT_ROOT}/tools/premerge-squash/commands/run.sh"
