#!/usr/bin/env bash

VERSION="$1"
sed -r "s/version: [0-9]+\.[0-9]+\.[0-9]+/version: $VERSION/" \
    build/openapi.yaml > docs/openapi.yaml

## Here is what's going on in the above command.
## We search and replace patterns that look something like a version
## number...
##
##     version: 23.9.3
##
## and replace it with the passed version number.
##
##     version: 23.10.0
##
## And we replace all such occurences in the bundled file in
## build/openapi.yaml and write the results to docs/openapi.yaml.
