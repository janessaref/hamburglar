const mysql = require("mysql");
const connection;

// connection to the local mysql or heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "jerrifong",
        password: "mepassword",
        database: "burgers_db"
    });
};

// express-handlebars connection
connection.connect((err) => {
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exporting connection to be used in orm.js
module.exports = connection;