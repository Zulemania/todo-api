const express = require('express');
const pool = require('./model.js');
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Test Endpoint
app.get('/', (req, res) => {
  res.send('Here, we go!')
})

// Get all todo
app.get('/todo', (req, res) => {
  pool.query(`select * from todo`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
});

// Create new todo
app.post('/todo', (req, res)=> {
  const todo = req.body;
  let insertQuery = `insert into todo(id, description) values(${todo.id}, '${todo.description}')`
  //let insertQuery = `insert into todo(id, description) values(4, 'Move the couch')`
  pool.query(insertQuery, (err, result)=>{
    if(!err){
      res.send('New todo created!')
    }
    else{ console.log(err.message) }
  })
});





// server port connection
app.listen(3000, () => {
  console.log(`app listening on port 3000`)
})
