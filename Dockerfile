# Use a lightweight web server image
FROM nginx:alpine

# Copy built app (HTML, CSS, JS) to nginx public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80