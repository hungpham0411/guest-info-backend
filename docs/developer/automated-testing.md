# Automated Testing

We use scripts to call other scripts that runs the test.

```bash
commands/test.sh
```

This calls the "test" script defined in the commands folder.
`commands/test.sh` should run all the tests (unit tests, end-to-end tests,
documentation tests, etc.). Other scripts may be defined to run individual
tests.

Each linter is documented in each's subdirectory under [/tools/](../../tools/).
