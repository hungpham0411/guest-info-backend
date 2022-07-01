#!/usr/bin/env bash

main() {
    get-markdown-files | \
    check-links-in-each-markdown-file
}

get-markdown-files() {
    # Print paths to files separated by null character (-print0).
    # Don't print markdown files in node_modules (-prune).
    find . -type d -name "node_modules" -prune -or -name \*.md -print0
}

check-links-in-each-markdown-file() {
    # Call markdown-link-check (provided by Docker image) once (-n1) for each file passed on stdin
    # separated by null character (-0)
    xargs -0 -n1 docker run --rm -v "${PWD}:/w" -w /w ghcr.io/tcort/markdown-link-check:stable -q
}

main
