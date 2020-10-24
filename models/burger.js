// require orm.js
const orm = require("../config/orm.js");

const burger = {
    // selects all burgers to be displayed on the "order ready" column
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // adds a new burger to the "order is ready" column
    insert: function(value, cb) {
        orm.insertOne("burgers", value, function(res) {
            cb(res);
        });
    },
    // updates the burgers status from "order is ready" to being devoured
    update: function(trueFalse, burgerDevouredID, cb) {
        orm.updateOne("burgers", trueFalse, burgerDevouredID, function(res) {
            cb(res);
        });
    },
    // removes the burger when "thrown away"
    delete: function(deleteID, cb) {
        orm.deleteOne("burgers", deleteID, function(res) {
            cb(res);
        });
    },
};

// exports burger to be required by the burgers_controller.js in the controllers directory
module.exports = burger;