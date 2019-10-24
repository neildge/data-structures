var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;
  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter] = value;
    this[this.counter] = value;
    this.counter++;
  },
  pop: function () {
    if (this.counter >= 1) {
      this.counter--;
      delete this[this.counter];
    }
    return this.storage[this.counter];
  },
  size: function () {
    return this.counter;
  }

};
