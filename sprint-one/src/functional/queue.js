var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    return storage[value] = value;
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage)['0'];
    var deletedValue = storage[first];
    delete storage[first];
    return deletedValue;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
