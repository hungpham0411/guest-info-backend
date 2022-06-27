FROM alpine:3.16
WORKDIR /commitlint-branch
RUN apk add --update --no-cache npm=8.10.0-r0 git=2.36.1-r0 bash=5.1.16-r2 && \
    npm install --save-dev \
        @commitlint/config-conventional@17.0.3 \
        commitlint@17.0.3
ENV PATH="/commitlint-branch/node_modules/.bin:$PATH"
COPY . .
CMD ["bash", "-c", "/commitlint-branch/entrypoint.sh"]
