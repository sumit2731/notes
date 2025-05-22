FROM nginx:stable-alpine

WORKDIR /etc/nginx/conf.d

# All these paths are relative to context i.e path where image is build
COPY nginx/nginx.conf .
# here we rename the file to default.conf, because this is what nginx expects
RUN mv nginx.conf default.conf
# then we change working directory again
WORKDIR /var/www/html

# COPY ../src .
COPY src .
# here we do not mention any command, which means default command of base image will run, which will start
# nginx server which is what we need