#!/usr/bin/env bash

ERROR_CODE=0
mark_error() {
    ERROR_CODE=1
}

main() {
    lint-json || mark_error
    return $ERROR_CODE
}

lint-json() {
    eslint . --ext .json --config devtools/lint-json-files/container/.eslintrc.json
}

main
