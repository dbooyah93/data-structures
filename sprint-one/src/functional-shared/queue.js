var Queue = function() { // queue = new Queue
  // var counter = 0;
  var someInstance = {
    counter: 0,
    storage: {
    }
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {

    this.storage[counter] = value;
    this.someInstance[counter] = value;
    this.counter++;
  },

  dequeue: function() {
    let deleteKey = (Object.keys(someInstance)[0]);
    let tmpVar = storage[deleteKey];

    delete storage[deleteKey];
    delete someInstance[deleteKey];

    return tmpVar;
  },

  size: function() {
    console.log('test;', this.storage, this);
    return Object.keys(this.storage).length; // queue = new Queue
    // queue.size
  }
};

let queue = new Queue;
console.log(queue.size);

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

// create an object that holds the methods that will be shared by all instances
// use keyword `this`
// use _.extend to copy the methods onto the instance

// attach queueMethods