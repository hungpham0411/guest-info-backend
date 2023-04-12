#!/usr/bin/env bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

cd "$SCRIPT_DIR/.." || exit

PROJECT_NAME="$( basename "$( pwd )" )"
docker rmi -f guestinfobackend:latest
docker build -t "$PROJECT_NAME" -f "${SCRIPT_DIR}/../src/Dockerfile" .

DOCKERFILE="${SCRIPT_DIR}/../src/Dockerfile"
BUILD_CONTEXT="./"

# Name to use for local builds.
LOCAL_IMAGE_NAME="$PROJECT_NAME"

if [[ -n "$PIPELINE_BUILDX_BUILD_OPTIONS" ]] ; then
    docker buildx build $PIPELINE_BUILDX_BUILD_OPTIONS \
        --file "$DOCKERFILE" "$BUILD_CONTEXT"
elif [[ -n "$PIPELINE_IMAGE_NAME" ]] ; then
    docker build --tag $PIPELINE_IMAGE_NAME \
        --file "$DOCKERFILE" "$BUILD_CONTEXT"
else
    docker build --tag "$LOCAL_IMAGE_NAME" \
        --file "$DOCKERFILE" "$BUILD_CONTEXT"
fi
