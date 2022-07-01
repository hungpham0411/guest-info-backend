# Markdown File Linter

We use [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
 to ensure our markdown files are formatted correctly.

## Requires

Docker

## Local Usage

These commands can be run from anywhere. They are shown as running from the
root of `lint-markdown-files`:

```bash
commands/run.sh
```

## CI Usage

Add the `lint-markdown-files` job to your pipeline by either including
or placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.

You can have it ignore certain files and paths by updating
[.markdownlintignore](.markdownlintignore).
