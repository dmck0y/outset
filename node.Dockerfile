FROM node:alpine

RUN mkdir -p /var/www/project
WORKDIR /var/www/project
COPY package*.json /var/www/project/
COPY .babelrc /var/www/project/

RUN npm install
CMD ["node", "app/index.js"]