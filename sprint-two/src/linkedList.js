var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //LinkedList.addToTail('Aziz')
  list.addToTail = function(value) {
    let tailNode = node(value);
    if (list.head === null && list.tail === null) {
      list.head = tailNode;
      list.tail = tailNode;
    } else
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) { // bucket (structure)
  var node = {};// linked names

  node.value = value;
  node.next = null;

  return node;
};

/**
 * Complexity: What is the time complexity of the above functions?
 * value : selfElement
 * next : node
 *
 * linkListOfA = name //points to otherName // points to anotherName
 * hash of names [linkListOfA, linkListOfB, linkListOfC] // we prefer the linkLists to have even number of objects with pointers
 * we chose size of array
 */
