# premerge-squash

This is a script to squash the commits in the current (feature) branch in
preparation for merging into main.

## Requirements

- bash
- git

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of the project. Replace `featureBranch` with the name of the feature
branch in which to squash commits.

```bash
git checkout featureBranch
commands/premerge-squash.sh
```

An editor window will open where you can type the commit message for the
squashed commits. Once you close your editor, the commit will complete.

Execute the following command to force push the commits to
the feature branch on the origin:

```bash
git push --force origin $(git branch --show-current)
```

## CI Usage

Not designed to be used in CI.

## Developers: Running the Test

Here is how to run the tests and what a successful run looks like.

```bash
$ cd tests/squashes-back-to-first-forkpoint
$ ./run-test.sh
Initialized empty Git repository in /workspaces/api/tools/premerge-squash/tests/squashes-back-to-first-forkpoint/testproj/origin/.git/
[main (root-commit) 53d3b05] fix: A
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 A
Switched to a new branch 'feat'
[feat 035793e] feat: E
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 E
Switched to branch 'main'
[main 3303195] fix: B
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 B
[main e271555] fix: C
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 C
Switched to branch 'feat'
Merge made by the 'recursive' strategy.
 B | 0
 C | 0
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 B
 create mode 100644 C
[feat 5937ced] feat: G
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 G
[feat 19a4c80] feat: H
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 H
Switched to branch 'main'
[main 3f9426a] fix: D
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 D
Cloning into 'sut'...
done.
Already on 'main'
Your branch is up to date with 'origin/main'.
Branch 'feat' set up to track remote branch 'feat' from 'origin'.
Switched to a new branch 'feat'
Already on 'feat'
Your branch is up to date with 'origin/feat'.
* 3f9426a (origin/main, origin/HEAD, main) fix: D
| * 19a4c80 (HEAD -> feat, origin/feat) feat: H
| * 5937ced feat: G
| *   8dd27df feat: F
| |\
| |/
|/|
* | e271555 fix: C
* | 3303195 fix: B
| * 035793e feat: E
|/
* 53d3b05 fix: A

I will squash all the commits on feat into
a single commit. This is a distructive operation and should normally
only be perfomed just before merging a merge request associated with
this branch.

Shall I squash [yN]: y
Already up to date.
[feat 1aa97ff] feat: EH
 3 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 E
 create mode 100644 G
 create mode 100644 H
Execute the following command:
git push --force origin feat
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 906 bytes | 113.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To /workspaces/api/tools/premerge-squash/tests/squashes-back-to-first-forkpoint/testproj/origin/.git
 + 19a4c80...1aa97ff feat -> feat (forced update)
* 1aa97ff (HEAD -> feat, origin/feat) feat: EH
| * 3f9426a (origin/main, origin/HEAD, main) fix: D
|/
* e271555 fix: C
* 3303195 fix: B
* 53d3b05 fix: A
*** Visually confirm that the resulting commit graph is correct ***
```

In particular notice that `feat: EH` stems from `fix: C`, `fix: B`,
and `fix A`.
