const express = require('express');
const srcRouter = express.Router();
const mysql = require('../dbPath');

srcRouter.get('/',(req,res)=>{
  res.send('Search according to name (after /search/:table/:name)to create the table')
})

srcRouter.get('/:table/:name/',(req,res)=>{
  const table = req.params.table;
  const name = req.params.name;
  mysql.query(`select * from ${table}  where name ='${name}'`, (error, results)=> {
  if (error) {throw error};
  console.log('Result : ', results);
  res.send(results);
  mysql.end();
})
})
module.exports = srcRouter;
