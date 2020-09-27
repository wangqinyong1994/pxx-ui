FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ["_site/**/*", "./"]

COPY ["./nginx.conf", "/etc/nginx"]

EXPOSE 80
