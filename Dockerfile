FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ["docs/*", "./"]

COPY ["./nginx.conf", "/etc/nginx"]

EXPOSE 80
