FROM nginx:1.17.8

WORKDIR /usr/local/var/www/dist

COPY nginx.conf /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

COPY _site/ /usr/local/var/www/dist

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
