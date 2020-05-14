class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push (value) {
    var defaultValue = Object.keys(this.storage).length;
    while (this.storage.defaultValue !== undefined) {
      defaultValue++;
    }
    return this.storage[defaultValue] = value;
  }

  pop () {
    var last = [Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    var deletedValue = this.storage[last];
    delete this.storage[last];
    return deletedValue;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}

