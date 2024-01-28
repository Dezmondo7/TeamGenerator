// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Extends from the Employee constructor
class Intern extends Employee {
    constructor (name, Id, email, school) {
        //calling using Super the employees constructor
        super (name, Id, email);

        this.school = school;
    }

    getSchool() {
        return "school";
    }


    getRole() {
        return "Intern";
    }

}

//exports
module.exports = Intern;