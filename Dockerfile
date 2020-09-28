FROM nginx:1.17.8

WORKDIR /usr/local/var/www/dist

EXPOSE 80

COPY _site/* ./
