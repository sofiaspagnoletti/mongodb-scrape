
var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    db.Article.find({}, function (err, data) {
      console.log("Length is " + data.length);
      res.render("index", {
        Articles: data
      });
    });
  // res.render("index", {
  //   Articles: [
  //     {
  //       title: "some headline",
  //       summary: "lorem ipsum",
  //       url: "www.google.com"
  //     },
  //     {
  //       title: "some other headline",
  //       summary: "lorem ipsum v2",
  //       url: "www.seatletimes.com"
  //     }
  //   ]
  // });
});


// Export routes for server.js to use.
module.exports = router;