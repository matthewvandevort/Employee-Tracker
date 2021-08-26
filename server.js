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

const viewEmployee = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if(err) throw(err);
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            startProgram();
        });
    } catch (err) {
        console.log(err);
        startProgram();
    };
};

const viewDepartment = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if(err) throw(err);
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            startProgram();
        });
    } catch (err) {
        console.log(err);
        startProgram();
    };
};

const viewRoles = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM rolet';
        connection.query(query, function (err, res) {
            if(err) throw(err);
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            startProgram();
        });
    } catch (err) {
        console.log(err);
        startProgram();
    };
};




