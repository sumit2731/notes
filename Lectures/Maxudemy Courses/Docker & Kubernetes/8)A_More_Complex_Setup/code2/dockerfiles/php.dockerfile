FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

COPY src .

RUN docker-php-ext-install pdo pdo_mysql

# chnageownerShip - this is a Linux command for changing folder ownership and controlling who's allowed to read or write
#  to folders. here we give special user more permision. speial user is www-data, this is created by php file. this user
# by default has no write access to our working directory. _R means recursively i.e do it for all files and folder.

# now here we need to add a colon and then repeat that username in the end to control that this user has read and write access,
# and then specify the folder name,And since Laravel needs to generate files in that folder during the php code execution,

# for example, log files or cache views,we need to grant this write access here.


RUN chown -R www-data:www-data /var/www/html