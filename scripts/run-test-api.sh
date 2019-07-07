#!/bin/bash
docker-compose down
docker-compose -f api/docker-compose.test.yml up --build --abort-on-container-exit