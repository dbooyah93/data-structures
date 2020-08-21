class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {

    this.storage[this.counter] = value;
    this[this.counter] = value;
    this.counter++;

  }

  dequeue() {

    let deleteKey = Object.keys(this.storage)[0];
    let tmpVar = Object.values(this.storage)[0];

    delete this.storage[deleteKey];
    delete this[deleteKey];

    return tmpVar;

  }


  size() {
    console.log(this);
    return Object.keys(this.storage).length;

  }

}
/**
 * Giraffe.prototype.isTallEnough()
 */