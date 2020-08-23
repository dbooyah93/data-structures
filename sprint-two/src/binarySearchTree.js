
/******* SELF BALANCING BINARY SEARCH TREE *****/
// binaryMethods.insert = function(input) {
//   let root = this;

//   let traverse = function(branch) {
//     if ( Object.keys(branch.left).length === 0 && input < branch.value ) {
//       branch.left = BinarySearchTree(input);
//       return;
//     }

//     if ( Object.keys(branch.right).length === 0 && input > branch.value ) {
//       branch.right = BinarySearchTree(input);
//       return;
//     }

//     // less than needs to go left

//     if ( input < branch.value && input > branch.left.value ) {
//       let tmpValue = branch.value;
//       branch.value = input;
//       root.insert(tmpValue);
//     }

//     if ( input > branch.value && input < branch.right.value ) {
//       var tmpValue = branch.value;
//       branch.value = input;
//       root.insert(tmpValue);
//     }
//   };
//   traverse(root);
// };


var BinarySearchTree = function(value) {

  let tree = Object.create(binaryMethods);
  tree.value = value;

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

    if ( Object.keys(branch.left).length === 0 && input < branch.value ) {
      branch.left = BinarySearchTree(input);
      return;
    }

    if ( Object.keys(branch.right).length === 0 && input > branch.value ) {
      branch.right = BinarySearchTree(input);
      return;
    }

    if ( input < branch.value ) {
      return traverse(branch.left);
    }

    if ( input > branch.value ) {
      return traverse(branch.right);
    }

  };

  return traverse(this);

};


binaryMethods.contains = function(inspect) {

  let root = this;

  let traverse = function (branch) {

    if ( Object.keys(branch.left).length === 0 && inspect < branch.value ) {
      return false;
    }
    if ( Object.keys(branch.right).length === 0 && inspect > branch.value ) {
      return false;
    }
    if ( inspect === branch.value ) {
      return true;
    } else if ( inspect < branch.value ) {
      return traverse(branch.left);
    } else if ( inspect > branch.value ) {
      return traverse(branch.right);
    }

  };

  return traverse(root);

};


binaryMethods.depthFirstLog = function(cb) {

  let root = this;
  // let result =
  // if ( left { full } ) { traverse left }
  // else if ( right { full } ){ traverse right }
  // else if ( right {} )




  let depthFirstSearch = function (treeNode) {
    cb(treeNode.value);
    if ( (Object.keys(treeNode.left).length) > 0 ) {
      depthFirstSearch(treeNode.left);
    }

    if ( (Object.keys(treeNode.right).length) > 0 ) {
      depthFirstSearch(treeNode.right);
    }

  };

  depthFirstSearch(root);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

