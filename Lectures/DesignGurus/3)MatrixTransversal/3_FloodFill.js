function floodFill_BFS(arr, x, y, newColor) {
  let intialColor = arr[x][y],
    queue = [[x, y]],
    visitedMatrix = {};
  while (queue.length) {
    let [currentRow, currentColumn] = queue.shift();
    if (
      currentRow < 0 ||
      currentColumn < 0 ||
      currentRow >= arr.length ||
      currentColumn >= arr[0].length
    )
      continue;
    if (
      arr[currentRow][currentColumn] === intialColor &&
      !visitedMatrix[`${currentRow}${currentColumn}`]
    ) {
      arr[currentRow][currentColumn] = newColor;
      visitedMatrix[`${currentRow}${currentColumn}`] = true;
      queue.push([currentRow, currentColumn - 1]);
      queue.push([currentRow, currentColumn + 1]);
      queue.push([currentRow - 1, currentColumn]);
      queue.push([currentRow + 1, currentColumn]);
    }
  }
  return arr;
}

let arr1 = [
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

let arr2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

//console.log(floodFill_BFS(arr1, 1, 3, 2));
// console.log(floodFill_BFS(arr2, 3, 2, 5));

/**
 * DFS_Iterative Solution
 */
function floodFill_DFS_Iterative(arr, x, y, newColor) {
  let initialColor = arr[x][y];
  /* 
  This condition is required if newColor is same as oldColor, then we do not have mechanism for identifying the already visisted nodes.
  either use this condition or rely on a object to keep track of visisted cells
  */
  if (initialColor === newColor) return arr;
  function DFSTransveral(row, column) {
    if (row < 0 || column < 0 || row >= arr.length || column >= arr[0].length)
      return;
    else if (arr[row][column] === initialColor) {
      arr[row][column] = newColor;
      DFSTransveral(row, column - 1);
      DFSTransveral(row, column + 1);
      DFSTransveral(row - 1, column);
      DFSTransveral(row + 1, column);
    }
  }
  DFSTransveral(x, y);
  return arr;
}

console.log(floodFill_DFS_Iterative(arr1, 1, 3, 2));
console.log(floodFill_DFS_Iterative(arr2, 3, 2, 5));
