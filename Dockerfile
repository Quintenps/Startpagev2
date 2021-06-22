FROM node:15.14.0-alpine3.10 AS node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install --prod

COPY . /usr/src/app

EXPOSE 3000
CMD [ "node", "./bin/www" ]