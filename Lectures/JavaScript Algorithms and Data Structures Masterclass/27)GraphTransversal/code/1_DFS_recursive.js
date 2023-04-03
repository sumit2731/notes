class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  /**
   * @MySolution
   */
  depthFirstIterative(start) {
    let stackArray = [],
      visitedNodes = {},
      result = [],
      currentVertex;
    stackArray.push(start);
    while (stackArray.length) {
      currentVertex = stackArray.pop();
      if (!visitedNodes[currentVertex]) {
        result.push(currentVertex);
        visitedNodes[currentVertex] = true;
        for (let neighbor of this.adjacencyList[currentVertex]) {
          if (!visitedNodes[neighbor]) stackArray.push(neighbor);
        }
      }
    }
    return result;
  }

  /**
   * @CourseSolution - Slightly optimized as we marked node as visisted while pushing it into the stack and same node is not pushed
   *  into array ever as compared to my solution.
   */
  depthFirstIterative2(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadhFirstSearch(start) {
    let result = [],
      queue = [start],
      visitedVertexs = { [start]: true };
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visitedVertexs[neighbor]) {
          queue.push(neighbor);
          visitedVertexs[neighbor] = true;
        }
      }
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breadhFirstSearch("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
