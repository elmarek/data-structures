class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue (value) {
    return this.storage[value] = value;
  }

  dequeue () {
    var first = Object.keys(this.storage)['0'];
    var deletedValue = this.storage[first];
    delete this.storage[first];
    return deletedValue;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}
