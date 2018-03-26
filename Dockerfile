FROM node:9.9.0-alpine

RUN apk add --no-cache git
RUN apk add --update python krb5 krb5-libs gcc make g++ krb5-dev

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .
