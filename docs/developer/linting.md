# linter

We use multiple tools to lint the parent project's source files.

## Requirements

Docker

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of the project:

```bash
bin/test.sh
```

## CI Usage

See [.gitlab-ci.yml](../../.gitlab-ci.yml)

## Linters

Below are the linters that linter runs.

- [package.json Linter](../../devtools/lint-pkg-json/README.md)
- [json Linter](../../devtools/lint-json-files/README.md)
- [Dockerfile Linter](../../devtools/lint-dockerfiles/README.md)
- [Shell Script Linter](../../devtools/lint-shell-scripts/README.md)
- [Markdown Files Linter](../../devtools/lint-markdown-files/README.md)
- [Markdown Links Linter](../../devtools/lint-markdown-links/README.md)
