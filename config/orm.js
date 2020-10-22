const connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            console.log("this is the VAL!!!", value)
                // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
                // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
            console.log("ARR!!!!!", arr)
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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
    updateOne: function(table, trueFalse, burgerDevouredID, cb) {
        let queryString = "UPDATE " + table + " SET " + objToSql(trueFalse) + " WHERE " + burgerDevouredID;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    deleteOne: function(table, deleteID, cb) {
        let queryString = "DELETE FROM " + table + " WHERE " + deleteID;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;