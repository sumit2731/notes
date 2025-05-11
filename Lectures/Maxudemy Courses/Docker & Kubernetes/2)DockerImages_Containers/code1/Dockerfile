# This allows us to build our image up on other base image. image with this name should exist on your system or on docker hub
FROM node

# Iy sets the working the working directory of docker.this tells docker that all subsequent commands should be run form inside of this 
# folder.COPY and RUN , run relative to this path

WORKDIR /app

# which files from here should go from local file system to  docker image
# copy takes 2 paths, first path.The first path is outside of the image where the files live that should be copied into the image.

# And if you just specify a dot here that basically tells Docker that it's the same folder that contains the Dockerfile. but excluding DockerFile
# And now the second dot is the path inside of the image where those files should be stored.And actually here it is a good idea to not 
# use the root folder, the root entry in your Docker container but some sub folder which is totally up to you, this folder will
# created if it does not exist

# COPY . /app

# since working directory is set we can use . or ./ as both are relaive paths

# COPY . .

# or

# COPY . ./

# here we want top explicit about it, so we set a absolute path

COPY . /app

# to copy selected files use this - COPY README.md package.json some-other-file.js whatever.txt ./

# now we want to run npm install. so do this. 
# By default, all those commands will be executed in the working directory of your Docker container and image.And by default, that 
# working directory is the root folder in that container file system. so to run this command, here we set working directory

RUN npm install

# a Docker container is isolated from our local environment. And as a result, it also has its own internal network. And when we listen 
# to port 80 in the node application inside of our container, the container does not expose that port to our local machine.So we won't 
# be able to listen on the port. therefore we need to add expose instruction to let Docker know that when this container is started,we
#  wanna expose a certain port to our local system, to our machine here which will run this container.

# but actually, this instruction only is added for documentation purposes.It doesn't really do anything.It is a best practice to add 
# it and you should add it to clearly document which ports will be exposed by your container

# The EXPOSE command in a Dockerfile will also tell `docker run` which ports to map to the host when using the `--publish-all` (or `-P`) option.  
# That option will tell docker to map a RANDOM port on the host to any EXPOSEd port that isn't explicitly mapped with `-p`/`--publish`.



EXPOSE 80

# these are instruction to docker for setting up the image. we only want to start the server when we start the container
# so instead of RUN we use CMD. this will be executed when we start container based on this image. for CMD syntax is bit different
# so we ahve to use array. if you dnt specify the CMD then CMD of base image will be executed. with no base image and no CMD
# you will get error

CMD ["node", "server.js"]

# p flag means publish, first is port on your system second is port on container
# docker run -p 3000:80 dockerImage


