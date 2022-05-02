FROM node:14

# with all these setup steps being executed inside of the image.

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.mjs" ]