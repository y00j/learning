var fs = require("fs");
var path = require("path");

function readCatalogSync() {
  var file = "data/catalog.json";
  var fullPath = path.resolve(file);
  console.log(fullPath);
  if (fs.existsSync(file)) {
    console.log("file exists!");
    var content = fs.readFileSync(file);
    var catalog = JSON.parse(content);
    return catalog;
  } else {
    console.log("file doesn't exist!");
  }
  return undefined;
}

exports.findItems = function(categoryId) {
  console.log("Returning all items for categoryId: " + categoryId);
  var catalog = readCatalogSync();
  if (catalog) {
    var items = [];
    for (var index in catalog.catalog) {
      if (catalog.catalog[index].categoryId === categoryId) {
        var category = catalog.catalog[index];
        for (var itemIndex in category.items) {
          items.push(category.items[itemIndex]);
        }
      }
    }
    if (items.length) {
      return items;
    }
  }
  return undefined;
};

exports.findItem = function(categoryId, itemId) {
  console.log("Looking for item with id" + itemId);
  var catalog = readCatalogSync();
  if (catalog) {
    for (var index in catalog.catalog) {
      if (catalog.catalog[index].categoryId === categoryId) {
        var category = catalog.catalog[index];
        for (var itemIndex in category.items) {
          if (category.items[itemIndex].itemId === itemId) {
            return category.items[itemIndex];
          }
        }
      }
    }
  }
  return undefined;
};

exports.findCategoryies = function() {
  console.log("Returning all categories");
  var catalog = readCatalogSync();
  if (catalog) {
    var categories = [];
    for (var index in catalog.catalog) {
      var category = {};
      category["categoryId"] = catalog.catalog[index].categoryId;
      category["categoryName"] = catalog.catalog[index].categoryName;

      categories.push(category);
    }
    return categories;
  }
  return [];
};
