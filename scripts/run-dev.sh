#!/bin/bash
docker-compose down
export NODE_ENV=dev
docker-compose -f docker-compose.yml up --build --abort-on-container-exit