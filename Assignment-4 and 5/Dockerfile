FROM node

RUN mkdir app
WORKDIR /app

COPY ./package.json .
COPY ./serve.js .

RUN npm install

CMD npm start
