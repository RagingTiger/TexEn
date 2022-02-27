# Base NGINX image
FROM nginx:alpine

# Get static content
COPY . /usr/share/nginx/html/
