const inquirer = require("inquirer");
const connection = require('./sqlConnection');

const showEmployee = require("./showEmployees");
const showEmployeeDepart = require("./showEmployeeDepart");
const addEmployee = require("./addEmployee");
const removeEmployee = require("./removeEmployee");
const updateEmployee = require("./updateEmployee");
const addRoles = require("./addRoles");


function startManager() {
inquirer
.prompt({
  type: "list",
  name: "task",
  message: "Would you like to do?",
  choices: [
    "View Employees",
    "View Employees by Department",
    "Add Employee",
    "Remove Employees",
    "Update Employee Role",
    "Add Role",
    "End",
  ],
})
.then(function ({ task }) {
  switch (task) {
    case "View Employees":
      showEmployee();
      break;

    case "View Employees by Department":
      showEmployeeDepart();
      break;

    case "Add Employee":
      addEmployee();
      break;

    case "Remove Employees":
      removeEmployee();
      break;

    case "Update Employee Role":
      updateEmployee();
      break;

    case "Add Role":
      addRoles();
      break;

    case "End":
      connection.end();
      break;
  }
});
}

module.exports = startManager;