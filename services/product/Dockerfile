FROM node:alpine

WORKDIR /app

# copy dependencies
COPY package.json .

# install dependencies
RUN npm install

# copy relevent files/folders
COPY . .

CMD [ "npm", "start" ]
