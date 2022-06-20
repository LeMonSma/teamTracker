const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, email, employeeId, gitHub) {
        super(name, email, employeeId);
        this.gitHub = gitHub;
    }

    getRole() {
        return `Engineer`
    }

    getGithub() {
        return this.gitHub
    }
}

module.exports = Engineer