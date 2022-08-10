const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'airel',
  password: '28061997',
  database: 'model_example'});

module.exports = connection;
