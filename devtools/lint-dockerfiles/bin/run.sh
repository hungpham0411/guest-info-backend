#!/usr/bin/env bash
docker run --rm -v "${PWD}:/mnt" -w /mnt hadolint/hadolint:latest-alpine \
     sh -c "find . -type f -not \( -path '*/node_modules/*' -o -path '*/.git/*' \) -name 'Dockerfile' | xargs hadolint"
