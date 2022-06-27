#!/usr/bin/env bash

ERROR_CODE=0
mark_error() {
    ERROR_CODE=1
}

main() {
    lint-package-json || mark_error
    return $ERROR_CODE
}

lint-package-json() {
    npmPkgJsonLint . --configFile devtools/lint-pkg-json/container/.npmpackagejsonlintrc.json
}

main
