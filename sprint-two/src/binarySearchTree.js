var BinarySearchTree = function(value) {

  let tree = Object.create(binaryMethods);
  tree[value] = value;

  tree.left = {};
  tree.right = {};


  return tree;
};

/** let oak = Binarysearchtree(290);
 * oak = {
 *    value = 5
 *    left: {
 *        value.toString(): = {
 *          value = 110
 *          left = {};
 *          right = {};
 *    }};
 *    right: {
 *        value.toString(): {
 *          value = 320;
 *          left = {};
 *          right = {};
 *    }};
 *    binaryMethods = {
 *      functions
 *      ...
 *      ...
 *    };
 * }
*/

let binaryMethods = {};

/**
 * every node keeps values of top, left and right
 *
 * inserting nodes and moving nodes down and away
 * requires holding one node and keeping it till
 * a new home is found
 *
 */
binaryMethods.insert = function(input) {
  let root = this;
  // if ( left is empty object and value is less than current ) { insert }
  // if ( right is empty object and value is more than current ) { insert }
  // if ( input is less than current && more than left ) { move left down and left, insert current }
  // if ( input is more than current && less than right ) { take current's place and place current to it's left (shifting everything to the left) }

  let traverse = function(branch) {

    if ( branch.left === {} && input < branch.value ) {
      branch.left = BinarySearchTree(input);
      return;
    }

    if ( branch.right === {} && input > branch.value ) {
      branch.right = BinarySearchTree(input);
      return;
    }

    if ( input < branch.value && input > branch.left ) {
      let tmpValue = branch.value;
      branch.value = input;
      root.insert(tmpValue);
    }

    if ( input > branch.value && input < branch.right ) {
      var tmpValue = branch.value;
      branch.value = input;
      root.insert(tmpValue);
    }

  };

  traverse(root);
};

binaryMethods.left = function() {

  return this.left;

};

binaryMethods.right = function() {

  return this.right;

};


binaryMethods.contains = function() {

};

binaryMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
