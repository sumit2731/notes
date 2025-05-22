# for useage with nginx we need fpm image
# FROM php:7.4-fpm-alpine
FROM php:8.1-fpm-alpine
# This folder might look strange,but it is a pretty standard folder on web servers to serve your website from.
# So we will actually ensure that in all the containers we're going to build throughout this module,we always 
# use this as the folder which should hold our final application.
WORKDIR /var/www/html

# Then I will run a command.And that's the reason why I'm building this custom image. I'm running a command where I will install
# some extra dependencies which we need and conveniently, in this base image there is a tool which we can use to install that.
# so we install pdo pdo_mysql

RUN docker-php-ext-install pdo pdo_mysql

# Now up to this point, in the course, in our docker files, we always had some command instruction at the end,
# here we don't.If you don't have a command or entry point at the end, then the command or entry point of the base image
# will be used if it has any.And this base image here, this php base image will have a default command which is executed
# which in the end is a command that invokes the PHP interpreter. So this image which we're building here will then automatically
# run this default command of the base image.And therefore it will be able to deal with incoming PHP files that should be interpreted
# because our base image is invoking this interpreter.