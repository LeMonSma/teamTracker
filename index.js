const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs')
// const generateHtml = require('./utils/generateHtml')
const employeeArray = []



function createEmployee() {


    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Please select an employee type',
            choices: ['Engineer', 'Intern', 'Manager', 'None'],
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please provide an employee role.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your Employees name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please provide a name.')
                    return false
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Employees email?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please provide an email.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your Employees Id?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please provide an employee id.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is their office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the office number.');
                    return false;
                }
            },
            when: ({ employeeRole }) => {
                if (employeeRole === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their Github username?',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter the Github username.');
                    return false;
                }
            },
            when: ({ employeeRole }) => {
                if (employeeRole === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is their associated school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school.');
                    return false;
                }
            },
            when: ({ employeeRole }) => {
                if (employeeRole === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another Employee?'
        }
    ]).then(data => {
        if (data.employeeRole === 'Manager') {
            employeeArray.push(new Manager(data.employeeRole, data.name, data.email, data.employeeId, data.officeNum))
            if (data.addEmployee) {
                return createEmployee()

            } else {
                return console.log(employeeArray)
            }
        } else if (data.employeeRole === 'Engineer') {
            employeeArray.push(new Engineer(data.employeeRole, data.name, data.email, data.employeeId, data.githubName))
            if (data.addEmployee) {
                return createEmployee()

            } else {
                return console.log(employeeArray)
            }
        } else {
            employeeArray.push(new Intern(data.employeeRole, data.name, data.email, data.employeeId, data.schoolInput))
            if (data.addEmployee) {
                return createEmployee()

            } else {
                console.log(employeeArray)
                return
            }
        }
    })

}
















//  function writeFile(fileName, data){
//      const generateHtml = require('')
// }
createEmployee()






