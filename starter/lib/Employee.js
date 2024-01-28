// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.Id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee'
    }
};

module.exports = Employee;

