const express = require('express');
const delRouter = express.Router();
const mysql = require('../dbPath');

delRouter.get('/',(req,res)=>{
  res.send('Delete data from table (after /delTable/:table/:id)to create the table')
})

delRouter.post('/:table/:username/:id',(req,res)=>{
  const table = req.params.table;
  const id = req.params.id;
  mysql.query(`delete from ${table}  where id =${id})`, (error, results)=> {
  if (error) {throw error};
  console.log('Result : ', results);
  res.send(results);
  mysql.end();
})
})
module.exports = delRouter;
