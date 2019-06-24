#Using pre-defined node base image
FROM node:10.0.0
ARG port
ENV PORT=$port



#creating the log directory
RUN mkdir -p /var/log/app/writersdorm

RUN mkdir /var/www
WORKDIR /var/www

# Copy package.json. To take advantage of cached Docker layer
ADD package.json /var/www/


# Install nodemon to restart server on changes and the express
# packages for routing and path
RUN npm install
RUN npm install nodemon react react-dom next @zeit/next-sass node-sass -g 

ADD . /var/www/

# Expose web service
EXPOSE 3030

CMD [ "npm", "run", "dev", "--", "-p", port ]
 