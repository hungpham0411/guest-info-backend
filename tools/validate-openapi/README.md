# validate-openapi

This is a container for validating the openapi.yaml file.

## Requirements

Docker

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of `validate-openapi`:

```bash
commands/build.sh
commands/run.sh
```

## CI Usage

Add the `validate-openapi` job to your pipeline by either including
or placing the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml file.

Requires the `test` stage to be defined in .gitlab-ci.yml.

Depends on the `build` job producing `build/openapi.yaml`. It validates
that file using swagger-cli.
