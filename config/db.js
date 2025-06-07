const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "211104",
    database: "uform"
});

module.exports = db;