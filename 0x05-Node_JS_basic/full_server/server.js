#!/usr/bin/node
// create a server

const express = require('express');
const router = require('./routes/index');

const port = 1245;
const hostname = '127.0.0.1';
const app = express();

app.use('/', router);
app.listen(port, hostname);

export default app;
