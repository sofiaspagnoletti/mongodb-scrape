
var express = require("express");

var router = express.Router();

var news = require("../models/index");

router.get("/", function(req, res) {
  res.render("index", {
    Articles: [
      {
        headline: "some headline",
        summary: "lorem ipsum",
        url: "www.google.com"
      },
      {
        headline: "some other headline",
        summary: "lorem ipsum v2",
        url: "www.seatletimes.com"
      }
    ]
  });
  // news.all(function(data) {
  //   var hbsObject = {
  //     news: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});


// Export routes for server.js to use.
module.exports = router;