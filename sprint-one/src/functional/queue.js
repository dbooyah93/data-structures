var Queue = function() {
  var someInstance = {};

  let counter = 0;

  var storage = {};

  someInstance.enqueue = function(value) {

    storage[counter] = value;
    someInstance[counter] = value;
    counter++;


  };

  someInstance.dequeue = function() {
    let deleteKey = (Object.keys(someInstance)[0]);
    let tmpVar = storage[deleteKey];

    delete storage[deleteKey];
    delete someInstance[deleteKey];

    return tmpVar;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
