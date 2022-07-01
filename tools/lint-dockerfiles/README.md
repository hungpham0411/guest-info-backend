# Dockerfile Linter

We use [hadolint](https://github.com/hadolint/hadolint)
to keep our Dockerfile optimized.

## Requires

Docker

## Local Usage

These commands can be run from anywhere. They are shown as running from the
root of `lint-dockerfiles`:

```bash
commands/run.sh
```

## CI Usage

Add the `lint-dockerfiles` job to your pipeline by either including or
placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.
