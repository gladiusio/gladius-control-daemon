FROM node:9.9.0-alpine

RUN apk add --no-cache git

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .
