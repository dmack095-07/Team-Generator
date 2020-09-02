const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const writeFileAsync = util.promisify(fs.writeFile);

const employee =[];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
  return inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your id number?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "checkbox",
    name: "role",
    message: "Select your role?",
    choices:[
      "Intern",
      "Engineer",
      "Manager",
    ],
  },
]);
} 
 function generateHTML(answers) {
   return `
   <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid" >
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading" id = "header">
                <h1 class="text-center">My Team</h1>
            </div>
            {{ team }}
        </div>
    </div>

  </body>

  </html>`;
 }

  
  
  promptUser()
  .then(function(employees){
    const html = generateHTML(employees);

    return writeFileAsync("./output/team.html", html);
  })
  .then(function(){
    console.log("The employees are added to team.html");
  })
  .catch(function(err){
    console.log(err);
  });

  
    

    

 
  

