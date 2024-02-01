// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Extends from the Employee constructor
class Engineer extends Employee {
    constructor (name, Id, email, github) {
        //calling using Super the employees constructor
        super (name, Id, email);

        this.github = github;
    };


    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github
    }
}

//exports
module.exports = Engineer;