FROM node:16.1.0-alpine as build-stage

# Create app directory
WORKDIR /app
ADD . /app/

# install dependencies from app
COPY package*.json /app/
RUN npm ci --loglevel error

# build app for production
RUN npm run build

# final stage
FROM nginx:1.19.10-alpine
RUN rm /etc/nginx/conf.d/default.conf

# Configure nginx
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

# Add application
COPY --from=build-stage /app/dist /usr/share/nginx/html

# https://nuxtjs.org/docs/2.x/features/configuration#edit-host-and-port
ENV PORT ""
ENV HOST 0.0.0.0

EXPOSE ${PORT}

# Nginx to serve 'static' dist directory 
CMD ["nginx","-g","daemon off;"]
