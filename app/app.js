"use strict";
//모듈
const express = require('express');
const app = express();
//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
//라우팅
const home = require('./src/routes/home');

app.use('/', home);

const PORT = 3000;

module.exports = app;