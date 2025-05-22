# FROM php:7.4-fpm-alpine
FROM php:8.1-fpm-alpine

WORKDIR /var/www/html

COPY src .

RUN docker-php-ext-install pdo pdo_mysql

#  the container is generally able to read and write,this image actually restricts read and write access by the container.
# this was not a problem while using bind mounts but when you copy folder we get this error.solution is to give right access
# to our source folder. the error  was - "failed to open stream"

# this is a Linux command for changing folder ownership and controlling who's allowed to read or write

# chown - changeOwnership , 
# -R - recursive, 
# read access to user, 
# www-data write access to user
# /var/www/html - filePath

RUN chown -R www-data:www-data /var/www/html