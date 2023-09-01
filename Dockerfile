FROM node
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./usr/src/app

RUN npm i

COPY . ./usr/src/app

EXPOSE 5173
CMD ["npm", "run", "dev"]