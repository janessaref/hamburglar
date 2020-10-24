// requires express and burger from the burger.js
const express = require("express");
const burger = require("../models/burger.js");

// express router
const router = express.Router();

// gets the data in the main page
router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // rendered by index.handlebars
        res.render("index", hbsObject);
    });
});

// posts the user's input into the "order is ready" column
router.post("/api/burgers", function(req, res) {
    burger.insert([
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// updates the status of "devoured" to true by the id
router.put("/api/burgers/:id", function(req, res) {
    const burgerDevouredID = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, burgerDevouredID, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// removes the burger when "throw away" button is clicked by the id
router.delete("/api/burgers/:id", function(req, res) {
    const deleteID = "id = " + req.params.id;
    burger.delete(
        deleteID,
        function(result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

// Export routes for server.js to use
module.exports = router;