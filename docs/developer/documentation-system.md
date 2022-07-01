# Documentation System

OpenAPI specification

* [The Swagger Viewer extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer)
  renders the specification locally.
* GitLab will provide a rendered view of the specification if the file
  is named openapi.yaml.

Client and Developer Guides

* Written in [Markdown](https://www.markdownguide.org/basic-syntax/)
* Rendered and browsed in GitLab
* Automated Testing Tools (Run by `commands/test.sh`):
  * [markdown-link-check](https://github.com/tcort/markdown-link-check#readme)
  * [markdownlint](https://github.com/DavidAnson/markdownlint)
  * [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
  * [swagger-cli](https://www.npmjs.com/package/swagger-cli)
