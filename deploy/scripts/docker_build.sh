#!/bin/sh

. .env
. .env.docker

echo "===== docker  build latest image ===="
docker build --rm=false -t ${IMAGE_NAME}:latest .

echo "==== docker run latest image ===="
docker kill vue_ke_comm || true && docker container prune --force && \
docker run -it --rm --network=host --name vue_ke_comm \
  -e PORT=${APP_PORT} \
  -v $PWD/deploy/nginx/nginx.conf:/etc/nginx/conf.d/nginx.conf \
  "${IMAGE_NAME}":latest
