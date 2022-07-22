FROM composer:latest

WORKDIR /var/www/html

# And now here's the reason why I need my custom Dockerfile,because I want to specify an entry point.Now as a side note, there would 
# be a way of doing this in the docker-compose file as well.But I'll come back to that later.This is the approach I like because we
# have it is very clear,easy to understand Dockerfile.

ENTRYPOINT [ "composer", "---ignore-platform-reqs" ]