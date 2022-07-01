#!/usr/bin/env bash

set -e

main() {

    allow-git-to-use-repository-created-by-different-user

    local CONFIG_FILE
    local FORK_POINT

    CONFIG_FILE="/lint-commits-on-branch/commitlint.config.js"
    FORK_POINT="$(get-fork-point-with-origin-main || echo "")"

    if [[ -z "$FORK_POINT" ]] ; then
        echo
        echo "WARNING: The number of commits on this branch has exceeded"
        echo "GIT_DEPTH=${GIT_DEPTH:-20}. We'll check one less commit message"
        echo "than that. If you need more checked, increase GIT_DEPTH"
        echo "in lint-commits-on-branch/gitlab-ci.yml."
        echo
        local N=$((${GIT_DEPTH:-20} - 1))
        FORK_POINT="$(git rev-parse "HEAD~${N}")"
    fi
    commitlint --verbose --config "$CONFIG_FILE" --from "$FORK_POINT"
}

allow-git-to-use-repository-created-by-different-user() {
    git config --global --add safe.directory /w
}

get-fork-point-with-origin-main() {
    ensure-origin-main-exists
    git merge-base origin/main "$(git rev-parse HEAD)"
}

ensure-origin-main-exists() {
    if ! git show-ref origin/main &> /dev/null ; then
        git fetch > /dev/null
    fi
}

main
