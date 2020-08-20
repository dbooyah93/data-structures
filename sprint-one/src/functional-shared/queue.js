var Queue = function() {
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

    this.storage[this.counter] = value;
    this[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    let deleteKey = (Object.keys(this.storage)[0]);
    let tmpVar = this.storage[deleteKey];

    delete this.storage[deleteKey];
    delete this[deleteKey];

    return tmpVar;
  },

  size: function() {
    console.log('test;', this.storage, this);
    return Object.keys(this.storage).length;

  }
};

let queue = new Queue;
console.log(queue.size);
