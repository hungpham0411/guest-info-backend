# Version Control System

We use [Git](https://git-scm.com/docs/gitattributes)
for version control. Here we describe how it is configured,
and how we write commit messages.

## .gitattributes

.gitattributes ensures that all of the line endings are normalized. If
you don't have a .gitattributes file, developers modifying files on
different operating systems will have conflicting line endings, which
could lead to major issues down the road.

For more information on .gitattributes see:

* [Git](https://git-scm.com/docs/gitattributes)
* [Gitattributes](https://dev.to/deadlybyte/please-add-gitattributes-to-your-git-repository-1jld)
* [Gitattributes best practices](https://rehansaeed.com/gitattributes-best-practices/)

### .gitattributes - Editing

Generally we don't edit this file directly. Instead we concatenate
predefined templates from the repository linked below.

* [alexkaratarakis/gitattributes - A repository of template gitattribute
    files](https://github.com/alexkaratarakis/gitattributes)

Always select Common.gitattributes, and then concatenate to it other templates
based on the programming languages that the project will be working with.

### .gitattributes - VS Code Extension

* [gitattributes extension for VS Code](https://marketplace.visualstudio.com/items?itemName=hashhar.gitattributes)

This is a VS Code extension that concatenates templates from
[alexkaratarakis/gitattributes](https://github.com/alexkaratarakis/gitattributes)
into the project's .gitattributes file

## .gitignore

Generally we should only store source code in a repository. We should avoid
storing generated files and deployment specific data.

See [What not to save into a git repo](https://zellwk.com/blog/what-not-to-save-into-a-git-repo/)

> NOTE: This project (API) currently violates this principle as it stores
> bundles. This allows us to distribute the specification as a single file
> to our clients (frontend and backend). Once we figure out how to post
> these files someplace outside the repository, we'll stop storing them
> in the repository. (This is technical debt that we incurred to get things
> moving.)

### .gitignore - Editing

Generally we don't edit this file directly. Instead concatenate files
from the repository linked below:

* [github/gitignore](https://github.com/github/gitignore)

### .gitignore - VS Code extension

* [Gitignore - VS Code extension](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)

This is an extension that will concatenate files from
[github/gitignore](https://github.com/github/gitignore) into the project's
.gitignore file.

## Conventional Commits

We follow
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
when writing commit messages.

Our [merge request template](../../.gitlab/merge_request_templates/default.md)
has more details and examples.

See [How to Write Better Git Commit Messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
