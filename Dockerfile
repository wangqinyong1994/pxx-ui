FROM nginx:1.17.8

WORKDIR /usr/local/var/www/dist

COPY nginx.conf /usr/local/etc/nginx

EXPOSE 80
EXPOSE 8011
EXPOSE 8002

COPY _site/* ./

CMD [ "sh", "-c", "ls" ]
