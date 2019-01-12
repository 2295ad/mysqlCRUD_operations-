const express = require('express');
const insRouter = express.Router();
const mysql = require('../dbPath');

insRouter.get('/',(req,res)=>{
  res.send('Insert data to the table (after /insTable/:table/:username/:id)to create the table')
})

insRouter.post('/:table/:username/:id',(req,res)=>{
  const table = req.params.table;
  const username = req.params.username;
  const id = req.params.id;
  mysql.query(`insert into  ${table} (name,id)values('${username}',${id})`, (error, results)=> {
  if (error) {throw error};
  console.log('Result : ', results);
  res.send(results);
  mysql.end();  
})
})
module.exports = insRouter;
