FROM node

WORKDIR /app

# COPY package.json .
COPY ./package.json /app

RUN npm install

# COPY . .
COPY . /app

EXPOSE 80

# CMD ["node", "server.js"]
CMD ["npm", "start"]

# for using named volume
    # docker build -t feedback-node:volumes .
    # docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes


# Along with bind mounts we have to use annonymous volumes. because if we do not use annoymous volume, then we have use case
# where container filesystem has some data and bind mount is also have some data, then docker with overwrite the data in 
# container because it cannot overwrire data in local file system.

# Now to solve this problem, we kind of need to tell Docker,that there are certain parts in its internal file system, which 
    # should not be overwritten from outside.  this can be achieved with anonymous volume. Docker always evaluates all volumes 
    # you are setting on a container,and if there are clashes, the longer internal path wins, so here /app/nod_modules  is longer
    # than /app. so /app/node_modules is mapped to annonymous volume and not bind mount, so it is not deleted

# Annonomous volumes can be useful for locking in certain data which already exists in the container.They can be useful for 
    # avoiding that this data then gets overwritten by another module.And that's something where anonymous volumes can save
    # the day.

# In addition, anonymous volumes also still create a counterpart, a folder, on your host machine. Of course that's removed when
    # the container's removed,but that exists as long as the container is running.And that of course means that docker doesn't
    # have to store all the data inside of the container and doesn't have to manage all the data inside of this container read 
    # write layer. But that instead it can outsource certain data to your host machine file system. And this can also help with
    # performance and efficiency.here we can have temp folder stored in local file system via annonymous volume. this overwriting
    # by annonmous volumes is only possible if annonymous volume is specified when you create the container via cmd. if you specify
    # it in docker config file, then this overwriting is not possible.

# For bind mount
    # docker build -t feedback-node:volumes .
    # docker run -v feedback:/app/feedback -v "/Users/susood/Desktop/notes/notes/Lectures/Maxudemy Courses/Docker & Kubernetes/3)Managing_Data_And_Working_With_Volumes/code2:/app" -v /app/nod_modules  feedback-node

# Using ro(read only) flag and then allowing writing in some folders by annonymous volume. here we make bind mount as read only
    # because we do not conainer to change it. so we use :ro. but inside container we wtite to folder temp and feedback.now feedabck
    # is mapped to another volume, so there we are still able to write. in case of temp folder we specify the announymous volume
    # with more specififc path, now are are able to write in temp folder also.
    
    # docker run 
        # -v feedback:/app/feedback (named volume so that this folder is not deleted even when container stops)
        # -v "/Users/susood/Desktop/notes/notes/Lectures/Maxudemy Courses/Docker & Kubernetes/3)Managing_Data_And_Working_With_Volumes/code2:/app:ro"
        # -v /app/temp (annonymous volume to prevent the deletion)
        # -v /app/nod_modules  (annonomous volume to prevent deletion of node_modules by overwriting form bind mount)
        # feedback-node