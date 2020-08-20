var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an object that holds the methods that will be shared by all instances
  // use keyword `this`
  // use _.extend to copy the methods onto the instance

  // attach queueMethods
  let self = this;
  _.extend(Queue, queueMethods);

};

var queueMethods = {


  enqueue: function(value) {

    storage[counter] = value;
    someInstance[counter] = value;
    counter++;


  },

  dequeue: function() {
    let deleteKey = (Object.keys(someInstance)[0]);
    let tmpVar = storage[deleteKey];

    delete storage[deleteKey];
    delete someInstance[deleteKey];

    return tmpVar;
  },

  size: function() {
    return Object.keys(storage).length;
  }


};



