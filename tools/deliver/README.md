# deliver

Delivers a new version when an MR is merged into main. It is responsible
for the following.

* Determining a new version number based on conventional commit messages
* Creating a git tag with that version number.
* Creating a GitLab release entry.
* Generating and publishing release notes to the release entry.
* Publishing a bundled specification containing the correct version number
    to the release entry.

## Requirements

Docker

## Local Usage

Not designed for local usage.

## CI Usage

Add the `deliver` job to your pipeline by either including or placing the
contents of [gitlab-ci.yml](./gitlab-ci.yml) in your project's .gitlab-ci.yml
file.
It requires a `deliver` stage, and depends on a `build` job that produces
`build/openapi.yaml`.

This tool uses semantic-release. To further configure its operation, take
a look at [releaserc.yaml](./releaserc.yaml) and
[gitlab-ci.yml](./gitlab-ci.yml).
