/**
 * My Solution using BFS, with VisistedObject
 */

function biggestisland(arr) {
  let biggestIsland = [],
    visitedMatrix = Array(arr.length)
      .fill(false)
      .map(() => Array(arr.length).fill(false));
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[0].length; column++) {
      if (arr[row][column] === 1 && !visitedMatrix[row][column]) {
        let islandArray = bfsSearch(arr, row, column, visitedMatrix);
        if (islandArray.length > biggestIsland.length) {
          biggestIsland = islandArray;
        }
      }
    }
  }
  console.log(biggestIsland);
  return biggestIsland.length;
}

function bfsSearch(arr, row, column, visitedMatrix) {
  let islandArray = [],
    queue = [[row, column]];
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
      arr[currentRow][currentColumn] === 1 &&
      !visitedMatrix[currentRow][currentColumn]
    ) {
      islandArray.push([currentRow, currentColumn]);
      visitedMatrix[currentRow][currentColumn] = true;
      queue.push([currentRow, currentColumn - 1]);
      queue.push([currentRow, currentColumn + 1]);
      queue.push([currentRow - 1, currentColumn]);
      queue.push([currentRow + 1, currentColumn]);
    }
  }
  return islandArray;
}

console.log(
  biggestisland([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
);

/**
 * Course Solution DFS (Recursion)
 */
