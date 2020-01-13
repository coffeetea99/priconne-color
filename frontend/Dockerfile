FROM ubuntu:18.04
MAINTAINER coffeetea <coffeetea99iro@gmail.com>

WORKDIR /srv/priconne-color

COPY package.json yarn.lock ./
COPY src/ ./src/
COPY public ./public/

RUN apt-get update \
    && apt-get install -y nodejs \
    && apt-get install -y npm \
    && npm install -g yarn \
    && yarn install \
    && yarn start

VOLUME /srv/priconne-color/src/db
EXPOSE 3000/udp