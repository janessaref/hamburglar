const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(value, cb) {
        orm.insertOne("burgers", value, function(res) {
            cb(res);
        });
    },

    update: function(objColValues, condition, cb) {
        orm.updateOne("burgers", objColValues, condition, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;