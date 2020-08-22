

// Instantiate a new graph
var Graph = function() {

  this.vertices = {
    /**
     * :1 {
     *    value: 1
     *    edges: [2, 3, 4, 99]; // bridges connections between other nodes like 2 WILL NOT PUT MORE VERTICES IN HERE
     * },
     *
     * 2: {
     *    value: 2
     *    edges: [1];
     * }
     */
  };

};



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // let key = node + '';
  this.vertices[node] =
  {
    'value': node,
    'edges': []
  };

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if ( this.vertices[node] ) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let reference = this.vertices; // vertices = {};
  let bridges = this.edges;

  delete reference[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if ( this.vertices[toNode] === undefined ) {
    return false;
  }

  let send = this.vertices[toNode].edges;
  let recieve = this.vertices[fromNode].edges;

  if ( send.includes(fromNode) && recieve.includes(toNode) ) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // (2, 3) (4, 3),

  let fromEdges = this.vertices[fromNode].edges;
  fromEdges.push(toNode);

  let toEdges = this.vertices[toNode].edges;
  toEdges.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  let fromEdges = this.vertices[fromNode].edges;
  let searchFrom = fromEdges.indexOf(toNode);

  let toEdges = this.vertices[toNode].edges;
  let searchTo = toEdges.indexOf(fromNode);

  fromEdges.splice(searchFrom, 1);
  toEdges.splice(searchTo, 1);


};

/**
 * let cb = function (a, bunch, o, arguments) {
 *  somethingTo(arguments)
 * }
 *
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };

 */

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (let key in this.vertices) {
    cb(this.vertices[key].value);

    // cb.apply(this.vertices[key], arguments);

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


