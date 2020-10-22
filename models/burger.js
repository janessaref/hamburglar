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

    update: function(trueFalse, burgerDevouredID, cb) {
        orm.updateOne("burgers", trueFalse, burgerDevouredID, function(res) {
            cb(res);
        });
    },

    delete: function(deleteID, cb) {
        orm.deleteOne("burgers", deleteID, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;