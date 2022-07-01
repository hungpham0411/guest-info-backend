#!/usr/bin/env bash

main() {
    validate-bundle
}

validate-bundle() {
    swagger-cli validate build/openapi.yaml
}

main
