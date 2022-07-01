# Developer Cheat Sheet

## Test

Validate the specification.

```bash
commands/test.sh
```

## Build

Bundle the specification in specification/ into a single file,
docs/openapi.yaml.

```bash
commands/build.sh
```

## Squash commits to prepare for merge into main

Before merging a merge request, use the following command to squash its
commits into a single commit, writing a good conventional-commit message.

```bash
commands/premerge-squash.sh
```
