#!/bin/sh
set -e

docker-compose -f docker-compose.ci.yml build --pull $@
docker-compose -f docker-compose.ci.yml push $@
