#!/usr/bin/env sh

# Support deprecated HOST_BASE_URL.
if [ -n "${HOST_BASE_URL}" ] ; then
    if [ -z "${BASE_URL}" ] ; then
        export BASE_URL="${HOST_BASE_URL}"
    fi
fi

# Inject BASE_URL into servers section of OpenApi specification.
if [ -n "${BASE_URL}" ] ; then
    echo "servers:" >> lib/openapi.yaml
    echo "  - url: '${BASE_URL}'" >> lib/openapi.yaml
fi

if [ -n "${1}" ] ; then
    "${@}"
else
    cd src && yarn dev-server
fi
