# FROM node:18-alpine

# WORKDIR /app

# COPY . .

# RUN npm install 

# EXPOSE 5501 

# CMD ["node", "index.js"]

FROM geerlingguy/php-apache:latest

RUN rm /var/www/html/index.html
# COPY index.php /var/www/html/index.php