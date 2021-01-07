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
                    "View all Employees' Roles",
                    "View all Employees' Information",
                    "Exit"
                ]
            }
        ]).then(function(val){
            switch(val.menu){
                case "View all Company's Departments":
                    viewDepartments();
                break;

                case "View all Employees' Roles":
                    viewRoles();
                break;

                case "View all Employees' Information":
                    viewRoles();
                break;
            };
        });
};


async function viewDepartments() {
    let query = "SELECT name, id FROM department ORDER BY id";
    const rows = await database.query(query);
    
    console.table(rows);

    return rows;
};

// function viewDepartments() {
//     database.query('SELECT department.name, department.id FROM department ORDER BY department.name;',
//     function(err, res) {
//         if (err) throw err
//         console.table(res)
//         mainPrompt();
//       });
// };

mainPrompt();

