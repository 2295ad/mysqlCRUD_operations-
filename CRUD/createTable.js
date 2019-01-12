const express = require('express');
const createRouter = express.Router();
const mysql = require('../dbPath');

createRouter.get('/',(req,res)=>{
  res.send('Add Table Name (after /createTable/:TableName)to create the table')
})

createRouter.post('/:name',(req,res)=>{
  const name = req.params.name;
  mysql.query(`create table ${name} (name varchar(255), id int NOT NULL, PRIMARY KEY (id))`, (error, results)=> {
  if (error) throw error;
  console.log('Result : ', results);
  mysql.end();
})
})
module.exports = createRouter;
