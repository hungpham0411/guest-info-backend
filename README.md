# Guest Info System Backend Server Overview

The GuestInfoBackend provides a REST API server that implements an OpenAPI specification and is called by the GuestInfoFrontend. The developers
of GuestInfoFrontend are the clients of GuestInfoBackend.

## Status

The system backend is currently in active development. The database is active and currently deployed.

## Build & Run 

Make sure docker is up and running. 

1. cd testing/automatic/build.sh
2. (open new terminal)
3. cd testing/automatic
4. sh test.sh

## Usage Instructions

The API implemented by this server is in [lib/openapi.yaml](lib/openapi.yaml). The API can be viewed:

* Using the [Swagger Viewer extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) which is installed in the Dev Container for this project.
* Directly in the [GitLab repository for this project](https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem/guestinfobackend).

The [source for the GuestInfoAPI](https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem/guestinfoapi) is where development of the API takes place.


## Tools

**Developer Guide**

1. Read [LibreFoodPantry.org](https://librefoodpantry.org/)
    and join its Discord server.
2. [Install development environment](docs/developer/install-development-environment.md)
3. Clone this repository using the following command

    ```bash
    git clone <repository-clone-url>
    ```

4. Open it in VS Code and reopen it in a devcontainer.
5. [lib/openapi.yaml](lib/openapi.yaml) contains the API specification that the server implements. **This file should not be edited**. If changes are needed in the API, development happens in the [source for the GuestInfoAPI](https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem/guestinfoapi).
6. Familiarize yourself with the systems used by this project
  (see Development Infrastructure below).
7. See [the developer cheat-sheet](docs/developer/cheat-sheet.md) for common
  commands you'll likely use.

**Development Infrastructure**

* [Automated Testing](docs/developer/automated-testing.md)
* [Build System](docs/developer/build-system.md)
* [Continuous Integration](docs/developer/continuous-integration.md)
* [Dependency Management](docs/developer/dependency-management.md)
* [Development Environment](docs/developer/development-environment.md)
* [Documentation System](docs/developer/documentation-system.md)
* [Version Control System](docs/developer/version-control-system.md)
* Visual Studio Code
* Docker Desktop

## License

[GPL v3](https://gitlab.com/LibreFoodPantry/client-solutions/bear-necessities-market/guestinfosystem/guestinfobackend/-/blob/main/LICENSE)
