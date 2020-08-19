var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    someInstance[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    let keys = Object.keys(storage); // [array, of, keys]
    let deleteKey = keys[ keys.length - 1 ];
    let tempVar = storage[deleteKey];

    delete storage[deleteKey];
    delete someInstance[deleteKey];
    return tempVar;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
