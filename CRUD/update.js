const express = require('express');
const updRouter = express.Router();
const mysql = require('../dbPath');

updRouter.get('/',(req,res)=>{
  res.send('Update data to the table (after /updTable/:table/:username/:id)to create the table')
})

updRouter.post('/:table/:username/:id',(req,res)=>{
  const table = req.params.table;
  const username = req.params.username;
  const id = req.params.id;
  mysql.query(`update ${table} set name = '${username}' where id =${id}`, (error, results)=> {
  if (error) {throw error};
  console.log('Result : ', results);
  res.send(results);
  mysql.end();
})
})
module.exports = updRouter;
