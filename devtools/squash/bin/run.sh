#!/usr/bin/env bash

# This script squashes all commits on the current (feature) branch
# back to the point where the branch was created
# in preparation for merging into main.
# It opens an editor for the user to write the commit message.

set -e

git fetch origin main:main
git pull
git reset --soft "$(git merge-base main "$(git branch --show-current)")"
git commit -v "$@"

echo "Execute the following command:"
echo "git push --force origin $(git branch --show-current)"
