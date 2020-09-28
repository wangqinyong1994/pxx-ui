FROM nginx:latest

WORKDIR /usr/share/nginx/html

EXPOSE 80

COPY _site/* ./

COPY ["./nginx.prod.conf",  "/etc/nginx/"]

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.prod.conf"]