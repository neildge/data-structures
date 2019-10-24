class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
    this.bottom = 0;
  }
  enqueue(value) {
    this[this.counter] = value;
    this.storage[this.counter]= value;
    this.counter++;
  }
  dequeue() {
    if (this.counter-this.bottom >=1) {
      delete this[this.counter];
      this.bottom++;
    }
    return this.storage[this.bottom-1];
  }
  size() {
    return this.counter-this.bottom;
  }
}
