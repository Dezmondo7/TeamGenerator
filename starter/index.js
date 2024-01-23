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
const employeeInput = () => {
    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: 'Employee, please enter your name',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Emplyee, Please enter your name')
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
    .then(employeeInput => {
        const { name, id, email, officeNumber } = employeeInput;
        const employee = new Employee (name, id, email, officeNumber);

        teamArray.push(employee);
        console.log(employee);
    })
};

const addManager = () => {
    console.log(`
   Add Maanger
    `);

    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: 'Manager, please enter your name',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Emplyee, Please enter your name')
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
        }
};