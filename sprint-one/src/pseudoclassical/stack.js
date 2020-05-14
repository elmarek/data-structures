var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var defaultValue = Object.keys(this.storage).length;
  while (this.storage.defaultValue !== undefined) {
    defaultValue++;
  }
  return this.storage[defaultValue] = value;
};

Stack.prototype.pop = function() {
  var last = [Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  var deletedValue = this.storage[last];
  delete this.storage[last];
  return deletedValue;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};