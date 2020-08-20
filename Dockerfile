FROM node:12.18.3-alpine3.9

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN mkdir -p ~/logs

RUN yarn install --production && yarn cache clean

COPY . /app

ENV NODE_ENV production
ENTRYPOINT ["node", "-r", "esm", "./bin/server"]
