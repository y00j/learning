var express = require("express");
var catalog = require("../modules/catalog.js");
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log(process.env.NODE_ENV);
  console.log(req.app.get("env"));
  console.log("Time: " + new Date());
  next();
});

router.get("/", function(request, response, next) {
  //console.log(process.env.NODE_ENV);
  //console.log(request.app.get('env'));

  var categories = catalog.findCategoryies();
  response.json(categories);
});

router.get("/:categoryId", function(request, response, next) {
  var categories = catalog.findItems(request.params.categoryId);
  if (categories === undefined) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not found");
  } else {
    response.json(categories);
  }
});

router.get("/:categoryId/:itemId", function(request, response, next) {
  var item = catalog.findItem(request.params.categoryId, request.params.itemId);
  if (item === undefined) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not found");
  } else {
    response.json(item);
  }
});

module.exports = router;
