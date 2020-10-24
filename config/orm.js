// require from connection.js in config directory
const connection = require("../config/connection.js");

// function that takes in an object to be converted into sql syntax
function objToSql(ob) {
    // empty array to push converted values
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // checks to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string has spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            // converts object to this ex. {devoured: true} => ["devoured=true"]
            arr.push(key + "=" + value);
        };
    };
    // translate array of strings to a single comma-separated string
    return arr.toString();
};

// grabs information from mysql database
const orm = {
    // selects all values from the burgers table
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    // inserts the new value from the user's input to the burgers table 
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + " (burger_name) " + "VALUES (\"" + value + "\")";
        connection.query(queryString, value, function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    // updates the status of the burger item and setting "devoured" to true with the selected id
    updateOne: function(table, trueFalse, burgerDevouredID, cb) {
        let queryString = "UPDATE " + table + " SET " + objToSql(trueFalse) + " WHERE " + burgerDevouredID;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    // removes the "leftovers" by the id of the burger
    deleteOne: function(table, deleteID, cb) {
        let queryString = "DELETE FROM " + table + " WHERE " + deleteID;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
};

// exports orm to be required by burger.js in the models directory
module.exports = orm;