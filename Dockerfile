FROM node:12.13.0-alpine
RUN apk update && apk add python make g++
RUN rm -rf /var/cache/apk/*
WORKDIR /vidsy
ADD . /vidsy
RUN yarn install
ENTRYPOINT [ "yarn" ]
