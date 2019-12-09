FROM alpine
COPY . /var/www/html/
EXPOSE 443/tcp 80/tcp