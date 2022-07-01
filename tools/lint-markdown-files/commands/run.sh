#!/usr/bin/env bash

main() {
    check-markdown-files
}

check-markdown-files() {
    docker run --rm -v "${PWD}:/mnt" -w /mnt ghcr.io/igorshubovych/markdownlint-cli:latest --ignore-path tools/lint-markdown-files/.markdownlintignore "**/*.md"
}

main
