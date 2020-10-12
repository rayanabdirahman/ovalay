FROM node:alpine

WORKDIR /app

# copy dependencies
COPY package.json .

# install dependencies
RUN npm install --only=prod

# copy relevent files/folders
COPY . .

CMD [ "npm", "start" ]
