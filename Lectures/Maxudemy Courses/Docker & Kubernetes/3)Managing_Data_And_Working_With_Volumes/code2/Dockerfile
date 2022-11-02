FROM node

WORKDIR /app

# COPY package.json .
COPY ./package.json /app

RUN npm install

# COPY . .
COPY . /app

EXPOSE 80

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

# For bind mount
    # docker build -t feedback-node:volumes .
    # docker run -v feedback:/app/feedback -v "/Users/susood/Desktop/notes/notes/Lectures/Maxudemy Courses/Docker & Kubernetes/3)Managing_Data_And_Working_With_Volumes/code2:/app" -v /app/nod_modules  feedback-node