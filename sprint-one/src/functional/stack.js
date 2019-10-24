var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0
  someInstance.push = function(value) {
    someInstance[counter] = value;
    storage[counter] = value;
    counter++; 
  };

  someInstance.pop = function() {
    if (counter >= 1) {     
      counter--;
      delete someInstance[counter];
    }
    return storage[counter];
  };

  someInstance.size = function() {
    return counter;
  };
  return someInstance;
};

var stack = Stack();
console.log(stack);
