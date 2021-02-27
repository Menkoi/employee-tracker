require("console.table");
const startManager = require("./utils/index");
const connection = require('./utils/sqlConnection');

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected to employee manager");
    console.log(`
    ░▒█▀▀▀░█▀▄▀█░▄▀▀▄░█░░▄▀▀▄░█░░█░█▀▀░█▀▀░░░▒█▀▄▀█░█▀▀▄░█▀▀▄░█▀▀▄░█▀▀▀░█▀▀░█▀▀▄
    ░▒█▀▀▀░█░▀░█░█▄▄█░█░░█░░█░█▄▄█░█▀▀░█▀▀░░░▒█▒█▒█░█▄▄█░█░▒█░█▄▄█░█░▀▄░█▀▀░█▄▄▀
    ░▒█▄▄▄░▀░░▒▀░█░░░░▀▀░░▀▀░░▄▄▄▀░▀▀▀░▀▀▀░░░▒█░░▒█░▀░░▀░▀░░▀░▀░░▀░▀▀▀▀░▀▀▀░▀░▀▀
    `)

    // start app
    startManager();
});



