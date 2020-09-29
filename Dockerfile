FROM nginx:1.17.8

WORKDIR /usr/local/var/www/dist

COPY ./nginx.conf /etc/nginx

EXPOSE 80

COPY _site/* ./
