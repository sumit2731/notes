/**
 * @MySolution Using_BFS_Algo
 */

function count_closed_islands(arr) {
  let closedIslandArray = [],
    visitedMatrix = {};
  for (let row = 1; row < arr.length - 1; row++) {
    for (let column = 1; column < arr[0].length - 1; column++) {
      if (arr[row][column] === 1 && !visitedMatrix[`${row}${column}`]) {
        let islandArray = BFS_Search_ITR(arr, row, column, visitedMatrix);
        if (islandArray.length > 0) closedIslandArray.push(islandArray);
      }
    }
  }
  return closedIslandArray.length;
}

function BFS_Search_ITR(arr, row, column, visitedMatrix) {
  let resultArray = [];
  let queue = [[row, column]];
  while (queue.length) {
    let [row, column] = queue.pop();
    let isCornerElement = false;
    if (
      row === 0 ||
      column === 0 ||
      row === arr.length - 1 ||
      column === arr[0].length - 1
    ) {
      isCornerElement = true;
    }
    //1 and is corner element
    if (arr[row][column] === 1 && isCornerElement) {
      visitedMatrix[`${row}${column}`] = true;
      return [];
    } else if (arr[row][column] === 1 && !visitedMatrix[`${row}${column}`]) {
      resultArray.push([row, column]);
      visitedMatrix[`${row}${column}`] = true;
      queue.push([row, column - 1]);
      queue.push([row, column + 1]);
      queue.push([row - 1, column]);
      queue.push([row + 1, column]);
    }
  }
  return resultArray;
}

/**
 * @Course Algo Using MyCode
 */

function count_closed_islands_DFS(arr) {
  let islandArrayCount = 0,
    visitedMatrix = {};
  for (let row = 1; row < arr.length; row++) {
    for (let column = 1; column < arr[0].length; column++) {
      if (
        arr[row][column] === 1 &&
        !visitedMatrix[`${row}${column}`] &&
        is_closed_island_DFS(arr, visitedMatrix, row, column)
      )
        islandArrayCount++;
    }
  }
  return islandArrayCount;
}

function is_closed_island_DFS(arr, visitedMatrix, row, column) {
  let isClosedIsland = true,
    isCornered = false;
  if (
    row === 0 ||
    column === 0 ||
    row === arr.length - 1 ||
    column === arr[0].length - 1
  )
    isCornered = true;
  if (arr[row][column] === 1 && isCornered) return false;
  else if (arr[row][column] === 1 && !visitedMatrix[`${row}${column}`]) {
    visitedMatrix[`${row}${column}`] = true;
    isClosedIsland &&= is_closed_island_DFS(
      arr,
      visitedMatrix,
      row,
      column - 1
    );
    isClosedIsland &&= is_closed_island_DFS(
      arr,
      visitedMatrix,
      row,
      column + 1
    );
    isClosedIsland &&= is_closed_island_DFS(
      arr,
      visitedMatrix,
      row - 1,
      column
    );
    isClosedIsland &&= is_closed_island_DFS(
      arr,
      visitedMatrix,
      row + 1,
      column
    );
  }
  return isClosedIsland;
}

let arr1 = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

let arr2 = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
];

console.log(count_closed_islands_DFS(arr1));
console.log(count_closed_islands_DFS(arr2));
