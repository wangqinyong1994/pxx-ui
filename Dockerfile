FROM nginx:latest

WORKDIR /usr/share/nginx/html

EXPOSE 80

COPY _site/* ./
COPY nginx.conf /etc/nginx/