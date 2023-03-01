FROM node:14

COPY package.json .

WORKDIR /app


RUN npm install

COPY . .

# COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 8080

CMD ["node", "server.js"]

