var uniqueInteger = (function() {          // Define and invoke
  var counter = 0;  // Private state of function below
  return function() { return counter++; };
}());