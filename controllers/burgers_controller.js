const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert([
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId });
        // res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const burgerDevouredID = "id = " + req.params.id;

    console.log("burgerDevouredID", burgerDevouredID);
    console.log("this is the devoured!!!!", req.body.devoured)
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

// router.delete("/api/burgers/:id", function(req, res) {
//     const condition = "id = " + req.params.id;

//     burger.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;