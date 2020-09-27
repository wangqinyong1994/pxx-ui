FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ["_site/*", "./"]

EXPOSE 80
