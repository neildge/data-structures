var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.bottom = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this[this.counter] = value;
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function () {
    if (this.counter-this.bottom>=1) {
      delete this[this.counter];
      this.bottom++;
    }
    return this.storage[this.bottom-1];
  },
  size: function () {
    return this.counter-this.bottom;
  }
};


