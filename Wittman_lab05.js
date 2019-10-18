// Frederick Wittman
// Lars Kotthoff
// Rajiv Khadka
// COSC 3020-01
// Lab 05
// 10/18/19

// We assume a well-formatted input.

function convertToAdjList (m) {
  var adjList = [];
  for (var i = 0; i < m.length; i++) {
    var subList = [];
    for (var j = 0; j < m.length; j++) {
      if (m[i][j] == 1) {
        subList.push(j);
      }
    }
    adjList.push(subList);
  }
  return adjList;
}

function test (m) {
  // Print adjacency matrix
  console.log("Adjacency matrix")
  for (var i = 0; i < m.length; i++) {
    console.log(m[i])
  }

  // Print adjacency list
  console.log("Adjacency list")
  adjList = convertToAdjList(m);
  for (var i = 0; i < m.length; i++) {
    console.log(i + " : " + adjList[i]);
  }
}

m = [[0, 1, 0], [1, 0, 1], [1, 1, 0]];
n = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
t = [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [1, 1, 1, 0]];
test(m);
test(n);
test(t);
