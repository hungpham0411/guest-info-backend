#!/bin/sh

docker run --rm -v "${PWD}:/mnt" -w /mnt koalaman/shellcheck-alpine:stable \
    sh -c "find . -type f -not \( -path '*/node_modules/*' -o -path '*/.git/*' \) -name '*sh' | xargs shellcheck"

## Here is an explanation of the about command.
## We are running an instance of shellcheck's image.
##
##     docker run --rm ... koalaman/shellcheck-alpine:stable
##
## We mount the current working directory into /mnt and making that
## the working directory inside the container.
##
##     ... -v "${PWD}:/mnt" -w /mnt koalaman/shellcheck-alpine:stable ...
##
## As an argument, we pass the command we want to run inside the container
## which is running a shell command.
##
##     sh -c "..."
##
## The shell command finds all the .sh and .bash files that are not in
## node_modules or .git
##
##     find . -type f -not \( -path '*/node_modules/*' -o -path '*/.git/*' \)
##          -name '*sh' ...
##
## And passes those files to shellcheck for inspecition.
##
##     ... | xargs shellcheck
##
## The end.
