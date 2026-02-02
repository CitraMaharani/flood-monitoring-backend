#!/bin/sh

npx sequelize-cli db:migrate --env production
node app.js
