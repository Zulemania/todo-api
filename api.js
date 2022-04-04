const express = require('express');
const pool = require('./model.js');
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Test Endpoint
app.get('/', (req, res) => {
  res.send('Here, we go!')
})

// Get all todo (for postman tests)
app.get('/todo', (req, res) => {
  pool.query(`select * from todo`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
});

// Get todo by id (for postman tests)
app.get('/todo/:id', (req, res) => {
  pool.query(`select * from todo where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
});

// Create new todo
app.post('/todo', (req, res)=> {
  const todo = req.body;
  let insertQuery = `insert into todo(id, description) values(${todo.id}, '${todo.description}')`
  
  pool.query(insertQuery, (err, result)=>{
    if(!err){
      res.send('New todo created!')
    }
    else{ console.log(err.message) }
  })
});

// Update existing todo
app.put('todo/:id', (req, res)=> {
  let todo = req.body;
  let updateQuery = `update todo set description = '${todo.description}', where id = ${todo.id}`

  pool.query(updateQuery, (err, result)=>{
    if(!err){
      res.send('Now that went well!')
    }
    else{console.log(err.message)}
  })
})



// server port connection
app.listen(3000, () => {
  console.log(`app listening on port 3000`)
})
