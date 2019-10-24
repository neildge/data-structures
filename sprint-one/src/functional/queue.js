var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var bottom = 0;
  
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    someInstance[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter-bottom >=1) {
    delete someInstance[bottom];
    bottom++;
    }
    return storage[bottom-1];
  };

  someInstance.size = function() {
    return counter-bottom;
  };

  return someInstance;
};