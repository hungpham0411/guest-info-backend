# Development Environment - VS Code DevContainer

VS Code DevContainers allows all of your developers to have the same
dependencies, files, and environments. This helps to squash the
"it works on my machine" issue that plagues development teams to this day.
All developers should work within and maintain the project's development
container.

See [Install Development Environment](install-development-environment.md)
to learn how to install and run the development environment.

The information below is about how to configure and install
new extension and tools into the development environment.

## How we created the initial DevContainer

Here are the steps we took to build the initial DevContainer. You should
not have to do this unless you are rebuilding the DevContainer for this
project or building a new DevContainer for your own project. Note: Things
may have changed after we followed these steps. For more information on
how to create a DevContainer see here:
<https://code.visualstudio.com/docs/remote/create-dev-container>

1. Select the Remote Window Indicator (green icon on bottom left of VSCode)
2. Select `Open Folder in Container`
3. After popup, select the folder you want to Containerize
4. Select `Node.js`
5. Select `18` for version
6. Click OK for extensions (Don't select any extensions. Starting the container
  may take a few minutes)
7. You should see a new .devcontainer folder in your repository

**IMPORTANT**: After changing *ANY* files in the `.devcontainer` folder,
you must go back to the remote window indicator and select `Rebuild Container`.
If you don't, your container will **NOT** use your changes.

## Resources

* [VS Code DevContainers](https://code.visualstudio.com/docs/remote/containers)
* [Creating VSCode DevContainers](https://code.visualstudio.com/docs/remote/create-dev-container)

## Files

* .devcontainer/Dockerfile
  * Install additional software through package manager (e.g., apt)
* .devcontainer/devcontainer.json
  * VSCode extensions
  * VSCode settings
  * Hooks to install dependencies

The files above may depend on other files in the project.

## Notes

* Always work inside a devcontainer.
* Avoid using development tools outside the devcontainer, instead install
  them into the devcontainer.
* Install development tools using the above files so that others can use
  them too.
* Rebuild the devcontainer anytime you modify the above files or any file
  they depend on.

## .devcontainer/devcontainer.json

Use this file to

* Install VS Code extensions
* Configure VS Code

This file is configured to call .devcontainer/init_devenv.sh. Use this file to install
additional development dependencies and configure the development environment.

For more information see
  [VS Code: Create DevContainer](https://code.visualstudio.com/docs/remote/create-dev-container)

## .devcontainer/Dockerfile

Read the comments in this file. There are sections that can be uncommented
to install 3rd party tools to the development environment.

For more information see
  [VS Code: Create DevContainer](https://code.visualstudio.com/docs/remote/create-dev-container)

## Working with timezones in VSCode

VSCode sets the default timezone to UTC. After running these
commands to change the timezone, you must reopen container.

To check the available timezones, enter in bash:

```bash
ls /usr/share/zoneinfo
```

To set a new timezone for a single session, enter in bash:

```bash
export TZ="ENTER_TIMEZONE"
```

For example, to set your timezone to ET, we find America/New_York inside
/usr/share/zoneinfo, and then we set TZ as follows.

```bash
export TZ="America/New_York"
```

Confirm it worked by running

```bash
date
```

If you want to have the timezone set every time you open the
container, add the export statement to .bashrc in the home directory
of the user that the container runs as. The following command should work.

```bash
echo 'export TZ="ENTER_TIMEZONE"' >> ~/.bashrc
```

Your TZ should be set the next time you open a new bash shell.

---

## See also

* [Install the Development Environment](install-development-environment.md)
