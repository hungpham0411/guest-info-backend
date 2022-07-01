# build

This is a container for building the openapi.yaml file.

## Requirements

Docker

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of `build`:

```bash
commands/build.sh
commands/run.sh
```

## CI Usage

Add the build job to your pipeline by either include or place the contents
of [gitlab-ci.yml](./gitlab-ci.yml) in your projects .gitlab-ci.yml file.
It requires a `build` stage, and produces a `build/openapi.yaml` bundle
file that subsequent jobs can access by declaring a dependency on the
build job:

```yaml
somejob:
    dependencies:
        - build
```
