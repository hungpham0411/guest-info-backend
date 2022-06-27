#!/usr/bin/env bash

# Test out the special case for squashing
# Given:
#    A - B - C - D : main
#     \       \
#      `- E -- F - G - H : feat
# Results in:
#    A - B - C - D : main
#                 \
#                  `- EH : feat

set -e

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]:-$0}"; )" &> /dev/null && pwd 2> /dev/null; )";
TESTER_DIR="$SCRIPT_DIR"
PROJECT_ROOT="${TESTER_DIR}/../.."

main() {
    create-test-project-directory
    create-test-project
    change-to-feature-branch
    show-current-commit-graph
    squash-commits-and-push
    show-current-commit-graph
    delete-test-project-directory
}

create-test-project-directory() {
    cd "${TESTER_DIR}"
    rm -rf testproj
    mkdir testproj
}

create-test-project() {
    cd testproj
    "${TESTER_DIR}/fixture.sh"
}

change-to-feature-branch() {
    cd sut 
    git checkout feat
}

show-current-commit-graph() {
    git --no-pager log --graph --oneline --all
}

squash-commits-and-push() {
    "${PROJECT_ROOT}/bin/run.sh" -m"feat: EH"
    git push -f origin feat
}

delete-test-project-directory() {
    cd "${TESTER_DIR}"
    rm -rf testproj
}

main
echo "*** Visually confirm that the resulting commit graph is correct ***"