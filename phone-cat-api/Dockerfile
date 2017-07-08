FROM node:8.1-alpine

MAINTAINER MAINTAINER solis.ro@gmail.com

ENV NAME phone-cat-api
ENV USER phone-cat-api

RUN apk update && apk upgrade && \
    apk add --no-cache --update bash git openssh python build-base
RUN addgroup $USER && adduser -s /bin/bash -D -G $USER $USER
USER $USER
WORKDIR /home/$USER

COPY ./package.json /home/$NAME/package.json
RUN cd /home/$NAME && npm install


COPY ./app /home/$NAME/app

# Tell Docker we are going to use this ports
EXPOSE 3000

CMD ["npm", "start"]
