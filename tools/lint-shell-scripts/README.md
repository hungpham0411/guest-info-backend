# Shell Script Linter

We use [shellcheck](https://github.com/gunar/shellcheck#readme)
to keep our bash scripts bug-free.

## Requires

Docker

## Local Usage

These commands can be run from anywhere. They are shown as running from the
root of `lint-shell-scripts`:

```bash
commands/run.sh
```

## CI Usage

Add the `lint-shell-scripts` job to your pipeline by either including
or placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.
