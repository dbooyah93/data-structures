var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let tailNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = tailNode;
      list.tail = tailNode;
    } else {
      list.tail.next = tailNode;
      list.tail = tailNode;
    }
  };

  list.removeHead = function() {
    if ( list.head === null || list.tail === null ) {
      return;
    } else {
      let tmpVar = list.head.value;
      list.head = list.head.next;
      return tmpVar;
    }

  };

  list.contains = function(target) {
    let cursor = list.head;
    while ( cursor !== null ) {
      if (cursor.value === target) {
        return true;
      }
      cursor = cursor.next;
    }
    return false;
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
