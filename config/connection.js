const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "jerrifong",
    password: "mepassword",
    database: "burgers_db"
});

// for heroku
// const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
    if (err) {
        console.log(err) {
            console.error("error connecting" + err.stack);
            return;
        };
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;