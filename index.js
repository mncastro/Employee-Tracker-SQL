const inquirer = require("inquirer");
const Database = require("./employees_db");
const cTable = require("console.table");
const CFonts = require('cfonts');


const database = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "astro268",
    database: "employee_tracker_db"
  });

function mainPrompt() {
    CFonts.say('Employee|Tracker', {
        font: 'simple',              // define the font face
        align: 'left',              // define text alignment
        colors: ['green'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
        gradient: false,            // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false,  // define if this is a transition between colors directly
        env: 'node'                 // define the environment CFonts is being executed in
    });
    return inquirer
        .prompt([
            {
                type: "list",
                message: "Welcome to your Employee Tracker\nWhat would you like to do?",
                name: "menu",
                choices: [
                    "View all Company's Departments",
                    "View all Employees' Roles by ID",
                    "View all Employees' Roles by Department",
                    "View all Employees' Roles by Salary",
                    "View all Employees' Information by ID",
                    "View all Employees' Information by Last Name",
                    "Add a new Department",
                    "Add a new Employee",
                    "Add a new Employee Role",
                    "Update an existing Employee Role",
                    "Exit\n"
                ]
            }
        ]).then(function(val){
            switch(val.menu){
                case "View all Company's Departments":
                    viewDepartments();
                break;

                case "View all Employees' Roles by Id":
                    viewRoles();
                break;

                case "View all Employees' Roles by Salary":
                    viewRolesSalary();
                break;

                case "View all Employees' Roles by Department":
                    viewRolesDepartment();
                break;

                case "View all Employees' Information by ID":
                    viewEmployees();
                break;

                case "View all Employees' Information by Last Name":
                    viewEmployeesName();
                break;

                case "Add a new Department":
                    addDepartment();
                    newDepartment();
                break;

                case "Add a new Employee":
                    addNewEmployee();
                break;

                case "Add a new Employee Role":
                    addNewEmployeeRole();
                break;

                case "Update an existing Employee Role":
                    updateEmployeeRole();
                break;

                case "Exit": {
                    exitOption();
                break;
                }
            };
            mainPrompt();
        });
};

mainPrompt();


async function viewDepartments() {
    let query = "SELECT name, id FROM department ORDER BY id";
    const rows = await database.query(query);
    
    console.table(['name', 'id'], rows);

    return rows;
};

async function viewRoles() {
    let query = "SELECT title, salary, department_id FROM role ORDER BY id";
    const rows = await database.query(query);
    
    console.table(['title', 'salary', 'department'], rows);

    return rows;
};

async function viewRolesSalary() {
    let query = "SELECT title, salary, department_id FROM role ORDER BY salary";
    const rows = await database.query(query);
    
    console.table(['title', 'salary', 'department_id'], rows);

    return rows;
};

async function viewRolesDepartment() {
    let query = "SELECT title, salary, department_id FROM role ORDER BY department_id";
    const rows = await database.query(query);
    
    console.table(['title', 'salary', 'department_id'], rows);

    return rows;
};

async function viewEmployees() {
    let query = "SELECT first_name, last_name, role_id, manager_id FROM employee ORDER BY role_id";
    const rows = await database.query(query);
    
    console.table(['first_name', 'last_name', 'role_id', 'manager_id'], rows);

    return rows;
};

async function viewEmployeesName() {
    let query = "SELECT first_name, last_name, role_id, manager_id FROM employee ORDER BY last_name";
    const rows = await database.query(query);
    
    console.table(['first_name', 'last_name', 'role_id', 'manager_id'], rows);

    return rows;
};


// const addDepartment = async () => {
//     inquirer
//       .prompt({
//         name: "newDepartment",
//         type: "input",
//         message: "Whats the title of the new Department?",
//       })
//       .then(async (answer) => {
//         try {
//           const deptQuery = `INSERT INTO department (name) VALUES (?);`;
//           const deptData = await database.query(deptQuery, answer.newDepartment);
//           console.log(
//             `${answer.newDepartment} has been added to the existing table`
//           );
//           console.table(deptQuery);
//           mainPrompt();
//         } catch (error) {
//           console.log(error);
//         }
//       });
//   };
  


