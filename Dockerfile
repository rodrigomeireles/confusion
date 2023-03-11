FROM node:lts-alpine

COPY . ./app
WORKDIR /app
RUN npm install --force
RUN npm install react-scripts@3.4.0 -g --silent


EXPOSE 3000

CMD npm start

