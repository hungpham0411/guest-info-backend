#!/usr/bin/env bash

set -e

# Sets up a new repo to test out the special case for squashing
#    A - B - C - D : main
#     \       \
#      `- E -- F - G - H : feat

mkdir origin
cd origin

git init .
touch A && git add A && git commit -m "fix: A"

git switch -c feat
touch E && git add E && git commit -m "feat: E"

git switch main
touch B && git add B && git commit -m "fix: B"
touch C && git add C && git commit -m "fix: C"

git switch feat
git merge -m "feat: F" main
touch G && git add G && git commit -m "feat: G"
touch H && git add H && git commit -m "feat: H"

git switch main
touch D && git add D && git commit -m "fix: D"

cd ..
git clone origin/.git sut

cd sut
git checkout main
git checkout feat

