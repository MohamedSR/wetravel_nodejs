const mysql = require("mysql2");

const conn = mysql.createConnection({
    database: 'esprit',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root'
});

module.exports = conn;