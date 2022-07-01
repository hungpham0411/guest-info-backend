# Markdown Link Linter

We use [markdown-link-check](https://github.com/tcort/markdown-link-check)
to ensure all links in our markdown files are not broken.

## Requires

Docker

## Local Usage

These commands can be run from anywhere. They are shown as running from the
root of `lint-markdown-links`:

```bash
commands/run.sh
```

## CI Usage

Add the `lint-markdown-links` job to your pipeline by either including
or placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.
