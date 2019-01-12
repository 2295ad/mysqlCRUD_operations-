const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const app = require('./app');
app.use(morgan('dev'));
const server = http.createServer(app).listen(port);
server.on('listening',()=>{
  console.log(`App listening on port ${port}`);
})
server.on('error',()=>{
  console.log('Something went wrong');
})
