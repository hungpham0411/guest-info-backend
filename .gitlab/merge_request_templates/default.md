# Squashing

We squash commits on a branch before merging because we want a single commit with a correctly formatted commit message.

Do the following on your local machine to squash the commits. The commands can be run from anywhere. They are shown as running from the root of the project.

- Use the *Code* button above to get commands in Step 1 to check out the branch locally.
- `bin/squash.sh`
- When your editor opens, write a multi-line commit message formatted correctly as a conventional commit 

    ```text
    type: message

    Co-authored-by: First1 Last1 <email1@example.com>
    Co-authored-by: First2 Last2 <email2@example.com>

    Closes #1
    ```

  - See the Conventional Commits section in this project's *Version Control* developer documentation for types.
  - See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for full specification.

- Save the commit message and close your editor

- `git push --force origin $(git branch --show-current)`
