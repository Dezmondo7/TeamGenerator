// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Extends from the Employee constructor
class Manager extends Employee {
    constructor (name, Id, email, officeNumber) {
        //calling using Super the employees constructor
        super (name, Id, email);

        this.officeNumber = officeNumber;
    };


    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return "officeNumber";
    }
}

//exports
module.exports = Manager;