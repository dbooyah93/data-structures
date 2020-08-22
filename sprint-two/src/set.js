var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};
/**
 * let set1 = Set();
 *
 * set1 = { // this === set1
 *  _storage = {};
 *
 *
 *
 *
 * }
 */
var setPrototype = {};

setPrototype.add = function(item) {
  // check if item !exists in `this` set
  // (true) => add item to set if
  if ( !(item in this._storage) ) {
    this._storage[item] = true;
    this[item] = true;
  }

};

setPrototype.contains = function(item) {
  if ( (item in this._storage) ) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this[item];
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
