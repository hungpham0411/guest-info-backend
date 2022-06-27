# squash

This is a script to squash the commits in the current (feature) branch in
preparation for merging into main.

## Requirements

- bash
- git

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of the project. Replace `featureBranch` with the name of the feature
branch in which to squash commits.

```bash
git checkout featureBranch
bin/squash.sh
```

An editor window will open where you can type the commit message for the
squashed commits. Once you close your editor, the commit will complete.

Execute the following command to force push the commits to
the feature branch on the origin:

```bash
git push --force origin $(git branch --show-current)
```
