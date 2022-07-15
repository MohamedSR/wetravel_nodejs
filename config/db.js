const mysql = require("mysql2");

const conn = mysql.createConnection({
    database: 'wetravel',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: ''
});

module.exports = conn;