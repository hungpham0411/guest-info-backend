# package.json Linter

To lint our package.json, we use [npm-package-json-lint](https://www.npmjs.com/package/npm-package-json-lint).
For more detailed configuration and usage instructions, see [the documentation](https://npmpackagejsonlint.org/docs).

## Requires

Docker

## Local Usage

These commands can be run from anywhere. They are shown as running from the
root of `lint-package-json`:

```bash
commands/build.sh
commands/run.sh
```

## CI Usage

Add the `lint-package-json` job to your pipeline by either including
or placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.

You may configure the linter by editing
[.npmpackagejsonlintrc.json](container/.npmpackagejsonlintrc.json)
