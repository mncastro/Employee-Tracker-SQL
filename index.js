const inquirer = require("inquirer");
const Database = require("./employees_db");
const cTable = require("console.table");

const database = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "astro268",
    database: "employee_tracker_db"
  });

function mainPrompt() {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "action",
                choices: [
                  "Add department",
                  "Add employee",
                  "Add role",
                  "Remove employee",
                  "Update employee role",
                  "View all departments",
                  "View all employees",
                  "View all employees by department",
                  "View all roles",
                  "Exit"
                ]
            }
        ])
};

mainPrompt();
