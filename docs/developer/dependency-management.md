# Dependency Management

A dependency management system helps us manage the versions of
all the tools and libraries we need to develop, build, test,
deploy, and run an application so that anyone can reliably
recreate the same environment on any machine so that they can
do the same. Specifically a dependency management system allows
 us to install tools and libraries of specific versions, track which
 tools and libraries were installed along with their version numbers,
identify tools and libraries that the project uses that are out
of date and/or contain vulnerabilities, and helps us upgrade or
downgrade the versions of the tools and libraries we are using.

## Development dependencies vs application dependencies

Before you start managing dependencies, you'll need to distinguish between
an application dependency and a development dependency.

See [Differences Between Dependencies, Devdependencies, and Peerdependencies](https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/)

## npm - Managing dependencies

[npm](https://www.npmjs.com/) is used to manage JavaScript dependencies.

### npm - How we created the initial package.json file

[npm init](https://docs.npmjs.com/creating-a-package-json-file#creating-a-new-packagejson-file)

### npm - Installing dependencies

To install the latest version of `awesomePackage`

```bash
npm install awesomePackage
```

To install a development dependency, add `--save-dev` to the command.

```bash
npm install awesomePackage --save-dev
```

Test it. If it doesn't work, you may need to install a specific version.
For example,

``` bash
npm install awesomePackage@^3.2.1
```

The caret (^) in front of the version number gives npm some flexibility
in which specific version it may install.

### npm - Updating dependencies

Checking for outdated dependencies must be performed manually for now.
Automatic dependency updating will be added at a later time. (16 June 2022)

Dependencies often use semantic versioning to clarify what kind of
update you will receive when you update to the latest version.

* [About Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning).

## Docker - Managing dependencies

Docker does not come with any automated dependency management tool.
We install dependencies in Dockerfile using common Linux package managers.
These can be used to install specific package versions. Whenever possible
you should specify a specific package version (this is called pinning the
version). The version number of the base image for a Docker file should also
pinned. The article below describes the basics of pinning dependencies in
Dockerfiles.

* [Our Dockerfile Tips & Tricks](https://www.balena.io/blog/our-dockerfile-tips-tricks/)
