#!/usr/bin/env bash

eslint . \
    --ext '.json' --ext '.js' --ext '.vue' \
    --ignore-path tools/lint-js-json-vue-files/container/.eslintignore \
    --config tools/lint-js-json-vue-files/container/.eslintrc.json
