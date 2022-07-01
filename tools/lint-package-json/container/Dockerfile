FROM node:18-bullseye-slim
WORKDIR /
COPY package* ./
RUN npm install
COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh
ENV PATH="/node_modules/.bin:${PATH}"
CMD [ "/bin/bash", "-c", "/entrypoint.sh" ]
