const generateHTML = require("./src/page-template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//set emtpy array to be pushed into 
const teamArray = []

//Inquirer to add input
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: 'Manager, please enter your name',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Manager, Please enter your name')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter your ID number')
                    return false;
                } else {
                    return true;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email adress',
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter your email adresss')
                    return true;
                }

            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office telephone number',
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log('Please enter the office telephone number')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    adding employee to the team
    `);

    return inquirer.prompt ([
        {
            type: 'list', 
            name: 'job role',
            message: 'please enter your job role',
            choices: ['Employee', 'Engineer']
        
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter your ID number')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email adress',
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter your email adresss')
                    return true;
                }

            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter empployee github username',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employee github username')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the office telephone number',
            when: (input) => input.role ==="Engineer",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log('Please enter the office telephone number')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern, please enter the name of your school",
            when: (input) = input.role === 'intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Intern, Please enter your school')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddingEmployee',
            message: 'Would you like to add anymore team members?',
            default: false
        }
    ])
    .then(employeeData => )