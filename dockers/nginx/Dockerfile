FROM nginx:1.17-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY certs /etc/nginx/certs/
RUN apk add bash curl
CMD ["nginx"]
