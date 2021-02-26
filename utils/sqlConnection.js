const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'masterchief19', // NEED TO CHANGE BEFORE ANY COMMIT
    database: 'employeesDB'
});

module.exports = connection;