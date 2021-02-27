const inquirer = require("inquirer");
const startManager = require("./index");
const connection = require('./sqlConnection');

function addEmployee() {
    console.log("Inserting an employee!")
  
    var query =
      `SELECT r.id, r.title, r.salary 
        FROM role r`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      const roleChoices = res.map(({ id, title, salary }) => ({
        value: id, title: `${title}`, salary: `${salary}`
      }));
  
      console.table(res);
      console.log("RoleToInsert!");
  
      inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the employee's first name?"
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?"
        },
        {
          type: "list",
          name: "roleId",
          message: "What is the employee's role?",
          choices: roleChoices
        },
      ])
      .then(function (answer) {
        console.log(answer);
  
        var query = `INSERT INTO employee SET ?`
        connection.query(query,
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.roleId,
            manager_id: answer.managerId,
          },
          function (err, res) {
            if (err) throw err;
  
            console.table(res);
            console.log(res.insertedRows + "Inserted successfully!");
  
            //startManager();
          });
      });
    });
  }

  module.exports = addEmployee;