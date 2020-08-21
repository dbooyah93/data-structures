class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }



  push (value) {
    this.storage[this.counter] = value;
    this[this.counter] = value;
    this.counter++;
  }

  pop () {

    let size = Object.keys(this.storage).length; // [an, array, of, keys]
    let tmpVar = Object.values(this.storage)[size - 1];
    let deleteKey = Object.keys(this.storage)[size - 1];
    // let tmpVar = this.storage[size - 1];

    delete this.storage[deleteKey];
    delete this[deleteKey];


    return tmpVar;
  }

  size () {
    return Object.keys(this.storage).length;
  }



}