#!/usr/bin/env bash

PROJECT_ROOT="$(git rev-parse --show-toplevel)"
DEVTOOLS="${PROJECT_ROOT}/tools"
export EXIT_CODE=0
flag-error() {
    EXIT_CODE=1
    echo "=== !!!ERROR!!! ==="
}

# Build it first
# "${PROJECT_ROOT}/commands/build.sh" || exit 1

# Linters

"${DEVTOOLS}/lint-dockerfiles/commands/run.sh" || flag-error

"${DEVTOOLS}/lint-shell-scripts/commands/run.sh" || flag-error

"${DEVTOOLS}/lint-markdown-links/commands/run.sh" || flag-error
"${DEVTOOLS}/lint-markdown-files/commands/run.sh" || flag-error

"${DEVTOOLS}/lint-js-json-vue-files/commands/build.sh" || flag-error
"${DEVTOOLS}/lint-js-json-vue-files/commands/run.sh" || flag-error

"${DEVTOOLS}/lint-package-json/commands/build.sh" || flag-error
"${DEVTOOLS}/lint-package-json/commands/run.sh" || flag-error

"${DEVTOOLS}/lint-commits-on-branch/commands/build.sh" || flag-error
"${DEVTOOLS}/lint-commits-on-branch/commands/run.sh" || flag-error

if [[ $EXIT_CODE -ne 0 ]] ; then
    echo "ERROR: Check output above."
fi

#This $SHELL is to prevent the terminal window from closing before the user can check the logs.
$SHELL

exit $EXIT_CODE
