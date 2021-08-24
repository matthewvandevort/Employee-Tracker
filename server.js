const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootr00t',
    database: 'employee_DB'
    
});
console.log('now listining');
connection.query = util.promisify(connection.query);

connection.connect(function (err) {
    if (err) throw err;
    startProgram();
})

console.table(
    "\n-------Employee Tracker-------\n"
);

const startProgram =