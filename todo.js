const express = require('express')
const bodyParser = require("body-parser");
const knex = require('knex');

const db = knex({
  client: 'pg', // postgres
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'cynthiachisom',
    password : 'postgres',
    database : 'todo_api'
  }
});

const app = express()

app.get('/', (req, res) => {
  res.send('Okay, that works!')
})

// server port connection
app.listen(3000, () => {
  console.log(`app listening on port 3000`)
})