var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // new instance already made

  this.storage = {};
  this.counter = 0;
  // this === Queue
  // new instance already
};

Queue.prototype.enqueue = function (value) {

  this.storage[this.counter] = value;
  this[this.counter] = value;
  this.counter++;

};

// as we build, the first one we put in === 0 the most recent will be the highest numbers

Queue.prototype.dequeue = function () {

  let deleteKey = Object.keys(this.storage)[0]; // 11
  let tmpVar = this.storage[deleteKey];

  delete this.storage[deleteKey];
  delete this[deleteKey];

  return tmpVar;
};

Queue.prototype.size = function () {
  console.log(this);
  return Object.keys(this.storage).length;

};




/**
 *
 * only can share methods
 * auto adds 2 lines
 *  a "class" object to be worked with/on
 *  returns object
 *
 *  capitalize function name to indicate to other that it is intended to use `new`
 * use the keyword `this` in constructor
 *
 * DO NOT
 * declare instance explicitly (because `new` does that for us)
 * run instance explicitly
 *
*/
