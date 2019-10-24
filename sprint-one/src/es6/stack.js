class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  push(value) {
    this[this.counter] = value;
    this.storage[this.counter]= value;
    this.counter++;
  }
  pop() {
    if (this.counter >=1) {
      delete this[this.counter];
      this.counter--;
    }
    return this.storage[this.counter];
  }
  size() {
    return this.counter;
  }
}