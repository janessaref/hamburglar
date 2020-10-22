const connection = require("../config/connection.js");

const orm = {
    selectAll: function(input, cb) {
        let queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + "(burger)" + "VALUES (?)";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColValues, condition, cb) {
        let queryString = "UPDATE" + table + "SET" + objColValues + "WHERE" + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;