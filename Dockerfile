FROM alpine
RUN apk add --update nodejs nodejs-npm

COPY . /src
WORKDIR /src

RUN npm install
ENTRYPOINT ["node", "./app.js"]
