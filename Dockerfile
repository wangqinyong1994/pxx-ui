FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/

EXPOSE 80

COPY _site/* ./