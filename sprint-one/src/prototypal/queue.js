var Queue = function() {

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.counter = 0;

  return newInstance;

};

let queueMethods = {

  enqueue: function(value) {

    this.storage[this.counter] = value;
    this[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {


    let deleteKey = Object.keys(this.storage)[0];
    let tmpVar = this.storage[deleteKey];
    delete this.storage[deleteKey];
    delete this[deleteKey];

    return tmpVar;

  },

  size: function() {
    console.log(this);
    return Object.keys(this.storage).length;
  }

};

