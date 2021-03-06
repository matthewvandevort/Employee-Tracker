



# Employee Tracker

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

# Description:

Description of project: This project tasked me to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.
```

## Acceptance Criteria

* Uses [Node.js](https://nodejs.org/en/) for the run-time functionality.

* Uses [Inquirer](https://www.npmjs.com/package/inquirer) for prompting the user.

* Uses [MySQL](https://dev.mysql.com/doc/) for the databases.

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
# Installation

Simply run:
```md 
npm install
```
# Demo
https://user-images.githubusercontent.com/82176811/131233228-9bb2a741-3fc4-49f1-9369-fa6622993989.mp4
# Resources Used

* [MDN Docs](https://developer.mozilla.org/en-US/)

* [NPM Docs](https://docs.npmjs.com/)

* [MySQL Docs](https://dev.mysql.com/doc/)

* [YouTube](https://www.youtube.com/)

# Sources

* Thanks to my instructors and TA's. Thanks to my tutor Simon Rennocks.
