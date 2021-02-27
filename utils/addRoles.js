const connection = require('./sqlConnection');
const inquirer = require("inquirer");

function addRole() {

    var query =
      `SELECT d.id, d.name, r.salary AS budget
      FROM employee e
      JOIN role r
      ON e.role_id = r.id
      JOIN department d
      ON d.id = r.department_id
      GROUP BY d.id, d.name`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      const departmentChoices = res.map(({ id, name }) => ({
        value: id, name: `${id} ${name}`
      }));
  
      console.table(res);
      console.log("Department array!");
  
      promptAddRole(departmentChoices);
    });
  }
  
  function promptAddRole(departmentChoices) {
  
    inquirer
      .prompt([
        {
          type: "input",
          name: "roleTitle",
          message: "Role title?"
        },
        {
          type: "input",
          name: "roleSalary",
          message: "Role Salary"
        },
        {
          type: "list",
          name: "departmentId",
          message: "Department?",
          choices: departmentChoices
        },
      ])
      .then(function (answer) {
  
        var query = `INSERT INTO role SET ?`
  
        connection.query(query, {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.departmentId
        },
          function (err, res) {
            if (err) throw err;
  
            console.table(res);
            console.log("Role Inserted!");
  
          });
  
      });
}

module.exports = addRole;