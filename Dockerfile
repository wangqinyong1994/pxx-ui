FROM nginx:1.17.8

WORKDIR /usr/local/var/www/dist

COPY nginx.conf /usr/local/etc/nginx

EXPOSE 80

COPY _site/* ./
