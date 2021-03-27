const http = require('http');
const express = require('express');

const app = express();

app.use('/product',(req, res, next) => {
    console.log('Another middleware');
    res.send(`<h1>Product View</h1>`)
});

app.use('/',(req, res, next) => {
    console.log('Another middleware');
    res.send(`<h1>Hello from NodeJS</h1>`)
});

app.listen(3000);
