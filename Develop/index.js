// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about this project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on how to use this project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the project license:',
        choices: ['None', 'MIT', 'Apache', 'BSD', 'Boost' ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution details here:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test details here:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username here:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address here:'
    }
];

// Function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('README.md has been created'))
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data))
}

// Function call to initialize app
init();
