const express = require('express');
const bodyParser = require("body-parser");
const pool = require('./model.js')
console.log(pool)


const app = express();

// Test Endpoint
app.get('/', (req, res) => {
  res.send('Okay, that works!')
})

// Get all todo
app.get('/todo', (req, res) => {
  pool.query(`select * from todo`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
});



// server port connection
app.listen(3000, () => {
  console.log(`app listening on port 3000`)
})
