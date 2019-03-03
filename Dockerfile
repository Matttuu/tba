FROM alpine
RUN apk add --update nodejs nodejs-npm

COPY . /src
WORKDIR /src

RUN npm install
RUN npm install express

EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]
