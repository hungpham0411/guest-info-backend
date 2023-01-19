# Squashing

We squash commits on a branch before merging because we want a single commit
with a correctly formatted commit message.

Do the following on your local machine to squash the commits. The commands are shown as running from the root of the project, but they can be run from anywhere.

1. Use the *Code* button above to get the *Step 1* commands to check out the branch locally.
2. Run the following command to squash the commits on your feature branch.

    ```bash
    commands/premerge-squash.sh
    ```

3. When your editor opens, write a multi-line commit message
  formatted correctly as a [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary).

    An example of a conventional commit is given below.

      ```text
      type: message

      Co-authored-by: First1 Last1 <email1@example.com>
      Co-authored-by: First2 Last2 <email2@example.com>

      Closes #<issue-number>
      ```

    Here are some common types.

      - `feat:` - A commit that adds new functionality from the client's perspective.
      - `fix:` - A commit that fixes a bug in existing functionality from the
      client's perspective.
      - `refactor:` - A change to production code that add new functionality
      or fix a bug from the client's perspective. However, it may remove
      functionality (which should have an exclamation point `refactor!:`).
      Typically used to redesign product code to make it easier to add more
      functionality or improve performance in the future, or to make the
      code more readable and understandable.
      - `docs:` - A change in the documentation or documentation system.
      - `build:` - A change in the build system.
      - `test:` - A change in a test or the test system.
      - `ci:` - A change in the continuous integration and delivery/deployment system.
      - `chore:` - A task performed to maintain the system. E.g., bumping the
      version number of the product. Upgrading the version of a dependency.
      These changes do not improve anything, but must be done as part of
      normal operation.

    The definition of "client" depends on the project. For the API
    project, its clients are Frontend and Backend. For the Frontend, its clients are people who use the frontend.
4. Save the commit message and close your editor.
5. Run the following command to push your squash commit to GitLab.

    ```bash
    git push --force origin $(git branch --show-current)
    ```
