/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.mins = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  
  if (this.mins.length === 0 || x <= this.mins[this.mins.length - 1]) {
      this.mins.push(x);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  
  let lastEl = this.stack.pop();
  if (lastEl === this.mins[this.mins.length - 1]) {
      this.mins.pop();
  }
  
  return lastEl;
  
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  let length = this.stack.length;
  return this.stack[length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/