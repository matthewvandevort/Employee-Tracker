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

connection.query = util.promisify(connection.query);

connection.connect(function (err) {
    if (err) throw err;
    console.log('now listining');
    // startProgram();
    
})

console.table(
    "\n-------Employee Tracker-------\n"
);

const startProgram = async( => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            maessage: 'What would you like to do?',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });

        switch (answer.action) {
            case 'View Employees':
                viewEmployee();
                break;

            case 'View Departments':
                viewDepartment();
                break;

            case 'View Roles':
                viewRoles();
                break;

            case 'Add Employees':
                addEmployee();
                break;

            case 'Add Departments':
                addDepartment();
                break;

            case 'Add Roles':
                addRoles();
                break;

            case 'Update Employee Role':
                updateEmployee();
                break;

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        startProgram();
    };
};