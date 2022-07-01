# json Linter

For linting json files, we use [eslint](https://www.npmjs.com/package/eslint)
with the [associated json plugin](https://www.npmjs.com/package/eslint-plugin-json).

## Requires

Docker

## Local Usage

These commands can be run from anywhere. They are shown as running from the
root of `lint-js-json-vue-files`:

```bash
commands/build.sh
commands/run.sh
```

## CI Usage

Add the `lint-js-json-vue-files` job to your pipeline by either including
or placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.

You may configure the linter by editing
[.eslintrc.json](container/.eslintrc.json). You can also tell it to ignore
certain files and paths by updating [.eslintignore](container/.eslintignore).
