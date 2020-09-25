FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY nginx.conf /usr/local/etc/nginx

EXPOSE 80

COPY _site/* ./
