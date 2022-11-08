#!/usr/bin/env bash

# This script squashes all commits on the current (feature) branch
# back to the point where the branch was created
# in preparation for merging into main.
# It opens an editor for the user to write the commit message.

set -e

if [[ "$(git branch --show-current)" == "main" ]] ; then
    echo
    echo "You cannot squash main using this command."
    echo "Maybe you meant to squash a different branch?"
    echo "Switch to that other branch and try again."
    echo
    exit 1
fi

echo
echo "I will squash all the commits on $(git branch --show-current) into"
echo "a single commit. This is a distructive operation and should normally"
echo "only be perfomed just before merging a merge request associated with"
echo "this branch."
echo
read -rp "Shall I squash [yN]: " should_squash

if [[ ! "$should_squash" =~ [yY][eE]?[sS]? ]] ; then
    echo
    echo "OK, I will not."
    echo
    exit 0
fi

git fetch origin main:main
git pull
git reset --soft "$(git merge-base main "$(git branch --show-current)")"
git commit -v "$@"

echo "Execute the following command:"
echo "git push --force origin $(git branch --show-current)"
