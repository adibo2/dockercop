FROM node:12.14.1

WORKDIR /thomas/frontend/src/app

COPY package.json .

RUN npm install
RUN npm install -g @angular/cli@10.0.0

COPY . .

EXPOSE 8081

CMD npm run start