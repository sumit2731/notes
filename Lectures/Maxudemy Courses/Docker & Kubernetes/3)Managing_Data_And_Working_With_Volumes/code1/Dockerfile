FROM node

WORKDIR /app

# COPY package.json .
COPY ./package.json /app

RUN npm install

# COPY . .
COPY . /app

EXPOSE 80

# this will add annonymous volumes, here we give path in docker file system that we want to map with some path on our local file system.
# path in our filesystem which is mapped by this volume is not known to us, it is managed by docker. And the only way for us to get access
#  to these volumes is with help of the Docker volume command. you can use "docker volume ls" command to show list of volume and will be
#  shown there. 

# If you start a container with --rm flag then annonumous volume is destroyed when container is stopped
# if container is not started with --rm flag, 
    # then annonumous volume is not destroyed when container is stopped. if you start the same container again then it uses existing
        # annonymus volume.
    # if we sop and delete the container, even then volume is not destroyed, but starting a new container based on same image, will
        # will create a new volume

# so some path in our system is mapped with this path in container ,We just don't know which path because it's managed by Docker.I can
# tell you it's hidden somewhere on your computer,and it's not meant to be accessed by you. So it's hard to find out where exactly it is,
# but also we shouldn't access and work in that folder anyways.as we also saw that this path is hidden somewhere in your system, we are
# not supposed to find it and work with it.


# And the key difference between named and  anonymous volumes is that named volumes will not be deleted by Docker when the 
# container shuts down.Anonymous volumes are deleted because they are recreated whenever a container is created.And therefore, 
# keeping them around after a container was removed makes no sense.Anonymous volumes are closely attached to one specific 
# container. Named volumes are not attached to a container.

# VOLUME [ "/app/feedback" ]

CMD ["node", "server.js"]