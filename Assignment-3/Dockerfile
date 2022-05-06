FROM node:14.19.1 as code
# RUN npm install -g @angular/cli@12.2.5
RUN mkdir mydockerangularapp

# RUN export NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /mydockerangularapp

RUN git clone https://github.com/gothinkster/angular-realworld-example-app.git

WORKDIR /mydockerangularapp/angular-realworld-example-app

RUN npm install

RUN npm run build

FROM nginx as serv

WORKDIR /usr/share/nginx/html

COPY --from=code ./mydockerangularapp/angular-realworld-example-app/dist .

EXPOSE 80


