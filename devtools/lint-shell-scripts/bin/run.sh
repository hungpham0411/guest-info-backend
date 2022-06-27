#!/bin/sh
docker run --rm -v "${PWD}:/mnt" -w /mnt koalaman/shellcheck-alpine:stable \
    sh -c "find . -type f -not \( -path '*/node_modules/*' -o -path '*/.git/*' \) -name '*sh' | xargs shellcheck"
