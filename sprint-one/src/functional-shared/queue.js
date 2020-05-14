var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  return this.storage[value] = value;
},

queueMethods.dequeue = function() {
  var first = Object.keys(this.storage)['0'];
  var deletedValue = this.storage[first];
  delete this.storage[first];
  return deletedValue;
},

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


