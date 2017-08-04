var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var db = require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({})
    .then(function(dbBurger){
      var hbsObject = {
        "burgers": dbBurger
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    })
 });

router.post("/", function(req, res) {
  db.burger.create({
    "burger_name": req.body.name,
    "devoured": 0
  })
    .then(function(dbBurger){
      res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
  db.burger.update(
    {devoured: 1},
    {where:{id:req.params.id}}
  )
    .then(function(dbBurger){
      res.redirect("/");
    });
});
// Export routes for server.js to use.
module.exports = router;