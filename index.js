const fs = require("fs")
const inquirer = require('inquirer');
const gmd = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the project Title?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Describe your project in more detail',
    name: 'longDesc'
  },
  {
    type: 'input',
    message: 'How is this program installed?',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Which is this products usage?',
    name: "usage"
  },
  {
    type: 'input',
    message: 'What are the guidelines for contribution',
    name: 'contribute'
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Which license do you use?',
    name: 'license',
    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'BSD 3-Clause License', 'I do not use a license']
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'userName'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, gmd(data), (err) =>
  err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions)
    .then((data)=>{
      writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();


