#!/usr/bin/env bash
docker run --rm -v "${PWD}:/mnt" -w /mnt hadolint/hadolint:latest-alpine \
     sh -c "find . -type f -not \( -path '*/node_modules/*' -o -path '*/.git/*' \) -name 'Dockerfile' | xargs hadolint"

## Here's what the above is doing.
## We are running an instance of hadolint's Docker image.
##
##     docker run --rm ... hadolint/hadolint:latest-alpine
##
## We are mounting the current directory to /mnt inside the container
## and making /mnt the working directory inside.
##
##     ... -v "${PWD}:/mnt" -w /mnt ...
##
## We pass a command to run inside the container, and that command is
## a shell script.
##
##     ... sh -c "..."
##
## The shell script finds all the Dockerfiles that are not in node_modules
## or .git.
##
##     find . -type f -not \( -path '*/node_modules/*' -o -path '*/.git/*' \)
##          -name 'Dockerfile' ...
##
## And passes these files to hadolint for inspection.
##
##     ... | xargs hadolint
##
## The end.
