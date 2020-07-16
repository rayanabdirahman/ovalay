FROM node:alpine

WORKDIR /app

# copy dependencies
COPY package.json .
COPY package-lock.json .

# install dependencies
RUN npm install --only=prod

# copy relevent files/folders
COPY . .

CMD [ "npm", "start" ]