const express = require('express');
const app = express();
const create = require('./CRUD/createTable');
const ins = require('./CRUD/insert');
const update = require('./CRUD/update');
const del = require('./CRUD/delete');
const search = require('./CRUD/search');

app.get('/',(req,res)=>{
  let payload ={
    1: 'Visit "/createTable" to create a Table',
    2: 'Visit "/insTable" to add values to the Table',
    3: 'Visit "/search" to search usernames',
    4: 'Visit "/updTable" to update usernames',
    5: 'Visit "/delete" to delete usernames',

    }
  res.json(payload);
})
app.use('/createTable',create);
app.use('/insTable',ins);
app.use('/updTable',update);
app.use('/delTable',del);
app.use('/search',search);
app.get('/')
module.exports = app;
