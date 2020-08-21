var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // the instance obj will be created automatically here = this.Object.create(prototype);

  this.storage = {};
  this.counter = 0;

  // instance obj will be delivered automatically here = this;
};

Stack.prototype.push = function(value) {

  this.storage[this.counter] = value;
  this[this.counter] = value;
  this.counter++;

};

Stack.prototype.pop = function() {

  let size = Object.keys(this.storage).length; // returns a number === 1 index larger
  let deleteKey = Object.keys(this.storage)[size - 1];
  let tmpVar = this.storage[deleteKey];

  delete this.storage[deleteKey];
  delete this[deleteKey];

  return tmpVar;
};

Stack.prototype.size = function() {

  return Object.keys(this.storage).length;

};