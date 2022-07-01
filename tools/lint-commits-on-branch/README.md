# lint-commits-on-branch

Checks that the commit messages on the current feature branch adhere to
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Requirements

Docker

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of `lint-commits-on-branch`:

```bash
commands/build.sh
commands/run.sh
```

## CI Usage

Add the `lint-commits-on-branch` job to your pipeline by either including or
placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.

In CI, by default, GitLab fetches only 20 commits of history. If a feature
branch's history exceeds this, then `lint-commits-on-branch` can't detect
where this branch forked from main, and cannot lint all of the commits on
the feature branch. It will attempt to lint all the commit messages it can.
If your feature branches are regularly longer than 20 commits, consider
setting `GIT_DEPTH` in gitlab-ci.yml to a larger value.
