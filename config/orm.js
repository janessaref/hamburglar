const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + " (burger_name) " + "VALUES (\"" + value + "\")";
        connection.query(queryString, value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, trueFalse, burgerId, cb) {
        let queryString = "UPDATE " + table + " SET " + trueFalse + " WHERE id = " + burgerId;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;