/**
 * @MySolution 1 - Not using GraphTraveversal
 */

function count_islands(arr) {
  let numberOfIslands = 0;
  for (let row = 0; row < arr.length; row++) {
    let connectedWithlastRow = false;
    for (let column = 0; column < arr.length; column++) {
      if (arr[row][column] === 1) {
        //is connected with upper row
        if (row > 0 && arr[row - 1][column] === 1) {
          connectedWithlastRow = true;
        }
        // (same element is not connected with element in upper row) and ((this is last element) or (next element is not zero) )
        if (
          (column === arr.length - 1 || arr[row][column + 1] === 0) &&
          !connectedWithlastRow
        ) {
          numberOfIslands++;
        }
      } else {
        connectedWithlastRow = false;
      }
    }
  }
  return numberOfIslands;
}

let arr1 = [
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
let arr2 = [
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

/**
 * your solutions are good but course solution is sufficient for this
 */

/* 
 Modified version of Course Solution 1 - Used BFS to tarverse the array. Also counted all the connected nodes
*/

function count_islands2(arr) {
  let islandArray = [],
    visitedMatrix = Array(arr.length)
      .fill(false)
      .map((val) => Array(arr[0].length).fill(false));
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[0].length; column++) {
      let currentNode = arr[row][column];
      if (currentNode === 1 && !visitedMatrix[row][column]) {
        let islands = BFSSearch2(arr, row, column, visitedMatrix);
        islandArray.push(islands);
      }
    }
  }
  console.log(islandArray);
  return islandArray.length;
}

function BFSSearch2(arr, row, column, visitedMatrix) {
  let resultArray = [],
    queue = [[row, column]];
  while (queue.length) {
    let [currentRow, currentColumn] = queue.shift();
    if (
      currentRow < 0 ||
      currentRow > arr.length - 1 ||
      column < 0 ||
      column > arr[0].length - 1
    )
      continue;
    if (
      arr[currentRow][currentColumn] === 1 &&
      !visitedMatrix[currentRow][currentColumn]
    ) {
      resultArray.push([currentRow, currentColumn]);
      visitedMatrix[currentRow][currentColumn] = true;
      queue.push([currentRow, currentColumn - 1]);
      queue.push([currentRow, currentColumn + 1]);
      queue.push([currentRow + 1, currentColumn]);
      queue.push([currentRow - 1, currentColumn]);
    }
  }
  return resultArray;
}

/* 
  CourseSolution 2 - Using BFS and without transversal matrix
*/

function count_islands3(arr) {
  let islandArray = [];
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr.length; column++) {
      if (arr[row][column] === 1) {
        let islands = BFSSearch3(arr, row, column);
        islandArray.push(islands);
      }
    }
  }
  console.log(islandArray);
  return islandArray.length;
}

function BFSSearch3(arr, row, column) {
  let queue = [[row, column]],
    resultArray = [];
  while (queue.length) {
    let [currentRow, currentColumn] = queue.shift();
    if (
      currentRow < 0 ||
      currentColumn < 0 ||
      currentRow >= arr.length ||
      currentColumn >= arr[0].length
    )
      continue;
    if (arr[currentRow][currentColumn] === 1) {
      resultArray.push([currentRow, currentColumn]);
      arr[currentRow][currentColumn] = 0;
      queue.push([currentRow, currentColumn - 1]);
      queue.push([currentRow, currentColumn + 1]);
      queue.push([currentRow - 1, currentColumn]);
      queue.push([currentRow + 1, currentColumn]);
    }
  }
  return resultArray;
}

// console.log(count_islands3(arr1));
// console.log(count_islands3(arr2));

/* 

  Course Solution - Using DFS_Iterative_visistedObject - se course solution
*/

function count_islands4(arr) {
  let resultArray = [],
    visitedMatrix = {};
  for (let row = 0; row < arr.lrngth; row++) {
    for (let column = 0; column < arr[0].length; column++) {
      if (arr[row][column] === 1 && !visitedMatrix[`${row}{column}`]) {
        let islandArray = DFS_Iterative(arr, row, column, visitedMatrix);
        resultArray.push(islandArray);
      }
    }
  }
  return resultArray.length;
}

/**
 * DFS_iterative Solugion without chnaging orignal array
 */
function DFS_Iterative(arr, row, column, visitedMatrix) {
  let islandArray = [];
  if (row < 0 || column < 0 || row >= arr.length || column >= arr[0].length)
    return islandArray;
  else if (arr[row][column] === 1 && !visitedMatrix[`${row}${column}`]) {
    islandArray.push([row, column]);
    visitedMatrix[`${row}${column}`] = true;
    islandArray = islandArray.concat(DFS_Iterative(row, column - 1));
    islandArray = islandArray.concat(DFS_Iterative(row, column + 1));
    islandArray = islandArray.concat(DFS_Iterative(row - 1, column));
    islandArray = islandArray.concat(DFS_Iterative(row + 1, column));
  }
  return islandArray;
}

console.log(count_islands(arr1));
console.log(count_islands(arr2));
