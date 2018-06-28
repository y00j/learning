var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  // throw new Error("error");
  res.render("index", { title: "hello" });
});

module.exports = router;
