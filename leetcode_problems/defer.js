

function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function(ms) {
  // let f = this;
  return function (...args) {
    setTimeout(() => this, ms);
  }

  // return _defer;
};

console.log(f.defer(0)(1, 2));
// f.defer(500)(1, 2);

let test = {
  defer: function() {
    setTimeout(function() {console.log(this)}, 0);
  }
}

test.defer();