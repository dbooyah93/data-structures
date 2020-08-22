var Tree = function(value) {
  var newTree = {
    /**
     * value: value;
     * children: [{//top.children[0]
     *
     *    value: value;
     *
     *    children: [] //no children
     * }, {// top.children[1]
     *
     *    value: value;
     *
     *    children: [{// top.children[1].children[0]
     *
     *        value: value;
     *
     *        children: []
     *    }];
     * }]; // fix me???
     */
  };
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // target.addChild // node.addChild
  // places a child to the end of a node
  let childTree = Tree(value);
  this.children.push(childTree);
  return childTree;
};

treeMethods.contains = function(target, result = false) {
  // node.contains(target)
  // searches node, and any asociated children or children of children for target
  // recurrrrrsssioonnnn

  if (this.value === target) {
    return result = true;
  }
  // childNode.children.contains is not a function

  let wrk = this.children; // for loop on line 59 wasn't applying "childNode"
  for (let i = 0; i < wrk.length; i++ ) { // itterates over children array
    let child = wrk[i];// itterates through this.children
    result = child.contains(target, result);
  }


  // for (let childNode of this.children) {
  //   result = childNode.children.contains(target, result);
  // }

  // if ( this.value === target ) {
  //   return true;
  // } else if ( this.children.length ) {
  //   // needs to check all children
  //   this.contains(target);
  // } else {

  // }

  return result;
  // returns boolean
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
