FROM nginx:1.17.8

WORKDIR /usr/local/var/www/dist

COPY nginx.prod.conf /etc/nginx

EXPOSE 80

COPY _site/* ./

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.prod.conf"]
