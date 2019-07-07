#!/bin/bash
docker-compose down
clear
docker-compose -f api/docker-compose.test.yml up --build --abort-on-container-exit