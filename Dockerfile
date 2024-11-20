FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server",".", "-p", "8080"]

