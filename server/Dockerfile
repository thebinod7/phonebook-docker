FROM node:17

WORKDIR /server

COPY package.json /server

RUN ls -al

RUN npm i

COPY . .

# node app port
EXPOSE 7000

CMD [ "npm", "run", "dev" ]