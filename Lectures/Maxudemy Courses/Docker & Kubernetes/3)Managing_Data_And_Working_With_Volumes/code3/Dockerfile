FROM node

WORKDIR /app


COPY ./package.json /app

RUN npm install


COPY . /app

# here we are setting a envirement variale PORT , 80 is default value. we can also refer to these envirement variables in this
# by using $

ENV PORT 80

# EXPOSE 80

EXPOSE $PORT

CMD ["npm", "start"]