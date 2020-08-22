

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuples = 0;

};
/**
 * let hash = new HashTable
 *
 * hash = {
 * _limit: 8;
 * _storage: { // we think storage = [] is available by closure
 *    each: function(){},
 *    get: function(){},
 *    set: function(){}
 *    }
 * }
 */

HashTable.prototype.resize = function (direction) {
  if ( direction === 'grow' ) {
    this.limit = 2 * this.limit;
    let newStorage = LimitedArray(this._limit);
    for ( let i = 0; i < this._storage; i++ ) {
      let tuple = this._storage[i];
      let key = tuple[0];
      let value = tuple[1];
      newStorage.insert(key, value);
    }

    this._storage = newStorage;

  } else if ( direction === 'shrink' ) {
    this._limit = this.limit / 2;
    let newStorage = LimitedArray(this._limit);
    for ( let i = 0; i < this._storage; i++ ) {
      let tuple = this._storage[i];
      let key = tuple[0];
      let value = tuple[1];
      newStorage.insert(key, value);
    }
    this._storage = newStorage;
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // hashing function which creates the index
  if ( !(Array.isArray(this._storage[index]) )) {
    this._storage[index] = [];
  }

  let needGrowth = Math.ceil( (this._limit * 0.75) < this._tuples );
  // if ( needUpdate ) {
  //   //resize('grow');
  // }


  let currBucket = this._storage[index];

  for ( var i = 0; i < currBucket.length; i++ ) {
    let currKey = currBucket[i][0];
    if (currKey === k) {
      currBucket[i][1] = v;
      this.tuples++;
      //if ( limit * .75 < tupols ){};
      return null;
    }
  }

  currBucket.push(([k, v]));
  this.tuples++;

  // this._storage
  // this._storage[index].push([k, this._storage.set(index, v)]);
  //   this._storage.set[index] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index][0] === k
  //    return k, v
  let currBucket = this._storage[index];
  for ( let i = 0; i < currBucket.length; i++ ) {
    let currKey = currBucket[i][0];
    if ( currKey === k ) {
      return currBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let currBucket = this._storage[index];
  for ( let i = 0; i < currBucket.length; i++ ) {
    let tuple = currBucket[i]; // [k, v];
    let currKey = tuple[0];
    if (currKey === k) {
      currBucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


