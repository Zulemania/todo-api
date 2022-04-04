const Pool = require('pg').Pool;

const pool = new Pool({
    host : '127.0.0.1',
    port : 5432,
    user : 'cynthiachisom',
    password : 'postgres',
    database : 'todo'
});

module.exports = pool;