FROM node

# here we are defining a argument, which has 80 as default value. this argument cannot be used in code, it is only avalible in docker file
# And even there, you can't use it on every instruction.You cannot use it on command, for example,because that's a runtime command in the end,
# which is executed when the container starts.But you can use your arg on all the other instructions. here we use it to set default value of
# PORT envirenment variable
ARG DEFAULT_PORT = 80

WORKDIR /app


COPY ./package.json /app

RUN npm install


COPY . /app

# here we are setting a envirement variale PORT , 80 is default value. we can also refer to these envirement variables in this
# by using $

# ENV PORT 80
ENV PORT $DEFAULT_PORT

# EXPOSE 80

EXPOSE $PORT

CMD ["npm", "start"]