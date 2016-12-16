FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY .babelrc /usr/src/app
RUN npm install
COPY server.js /usr/src/app
EXPOSE 8080
HEALTHCHECK --interval=1s CMD nc -z 127.0.0.1 8080
CMD [ "npm", "start" ]

