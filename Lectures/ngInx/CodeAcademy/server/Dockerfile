# Fetching the minified node image on alpine linux
FROM node:18

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /usr/src/app

# Copying all the files in our project
COPY package*.json ./


# Installing dependencies
RUN npm install

COPY . .

# Exposing server port
EXPOSE 7777


# Starting our application
CMD [ "node", "run", "start" ]

