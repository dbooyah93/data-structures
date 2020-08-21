var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.counter = 0;

  return newInstance;
};

var stackMethods = {


  push: function(value) {

    this.storage[this. counter] = value;
    this[this.counter] = value;
    this.counter++;

  },



  pop: function() {

    let keys = Object.keys(this.storage);
    let popKey = keys[keys.length - 1];
    let tmpVar = this.storage[popKey];
    delete this.storage[popKey];
    delete this[popKey];


    return tmpVar;

  },



  size: function() {
    return Object.keys(this.storage).length;
  }



};


