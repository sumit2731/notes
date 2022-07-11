FROM node

WORKDIR /app

# COPY package.json .
COPY ./package.json /app

RUN npm install

# COPY . .
COPY . /app

EXPOSE 80

# this will add annonymous volumes, here we give path in docker file system that we want to map with some path on our local file system. path in our 
# filesystem which is mapped by this volume is not known to us, it is managed by docker. And the only way for us to get access to these volumes is 
# with help of the Docker volume command. you can use "docker volume ls" command to show list of volume and will be shown there. 

# if you use --rm flag on container then annononmous volume
# will be removed when you stop the container(when we use rm flag it removes the container when we stop contaner), if you do not use this flag then
# even annonymous volume will persist

# so some path in our system is mapped with this path in container ,We just don't know which path because it's managed by Docker.I can tell you it's 
# hidden somewhere on your computer,and it's not meant to be accessed by you. So it's hard to find out where exactly it is, but also we shouldn't 
# access and work in that folder anyways.as we also saw that this path is hidden somewhere in your system, we are not supposed to find it and work 
# with it.


# And the key difference between named and  anonymous volumes is that named volumes will not be deleted by Docker when the 
# container shuts down.Anonymous volumes are deleted because they are recreated whenever a container is created.And therefore, 
# keeping them around after a container was removed makes no sense.Anonymous volumes are closely attached to one specific 
# container. Named volumes are not attached to a container.

VOLUME [ "/app/feedback" ]

CMD ["node", "server.js"]