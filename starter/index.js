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

//set emptyy array to be pushed into 
const teamArray = []

//Inquirer to add the manager input
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: 'Please enter your managers name',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Please enter your managers name')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'Please enter your ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter your manager ID number')
                    return false;
                } else {
                    return true;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your manager email adress',
            validate: email => {
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
            message: 'Please enter the manager office telephone number',
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
        const { name, Id, email, officeNumber } = managerInput;
        const manager = new Manager (name, Id, email, officeNumber);
//logs the information and the pushes the manager input into the team array
        teamArray.push(manager);
        console.log(manager);
    })
};
//gathering employee data input
const addEmployee = () => {
    console.log(`
    adding employee to the team
    `);

    return inquirer.prompt ([
        {
            type: 'list', 
            name: 'role',
            message: 'please enter your job role',
            choices: ['Engineer', 'Intern']
        
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
            name: 'Id',
            message: 'Please enter your Id',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter your Id number')
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
            validate: email => {
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
            message: 'Please enter employee github username',
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
            message: "Intern, please enter the name of your school",
            when: (input) => input.role === 'Intern',
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
    .then(employeeData => {

        let { name, Id, email, role, github, school, confirmAddingEmployee } = employeeData;
        let employee;

        if (role === "Engineer" ) {
            employee = new Engineer (name, Id, email, github)

            console.log(employee)

        } else if (role === "Intern") {
            employee = new Intern (name, Id, email, school);

            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddingEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray
        }
        })
    };

   //  write function to generate HTML page

   const writeFile = data => {
    fs.writeFile('./src/team.html', data, err => {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been succesffuly generated in the team.index file!!")
        }
    })
   };

   addManager()
   .then(addEmployee)
   .then(teamArray => {
    return generateHTML(teamArray);
   })
   .then(pageHTML => {
    return writeFile(pageHTML);
   })
   .catch(err => {
    console.log(err);
   });