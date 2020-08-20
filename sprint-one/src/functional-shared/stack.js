var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    counter: 0,
    storage: {}
  };

  _.extend(someInstance, stackMethods);


  return someInstance;
};

var stackMethods = {
  push: function(value) {

    this.storage[this.counter] = value;
    this[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    let keys = object.keys(this.storage);
    let deleteKey = keys[keys.length - 1];
    let tmpVar = this.storage[deleteKey];

    delete this.storage[deleteKey];
    delete this[deleteKey];

    return tmpVar;
  },

  size: function() {
    console.log('test;', this.storage, this);
    return Object.keys(this.storage).length; // queue = new Queue
    // queue.size
  }
};



// create an object that holds the methods that will be shared by all instances
// use keyword `this`
// use _.extend to copy the methods onto the instance

// attach queueMethods