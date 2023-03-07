const mysql = require('mysql');
const config = require('../config');

const conn = mysql.createConnection({
 host: config.MYSQL_HOST,
 user: config.MYSQL_USER,
 password: config.MYSQL_PASS,
 database: config.MYSQL_DB,
});

conn.connect();

module.exports = conn;