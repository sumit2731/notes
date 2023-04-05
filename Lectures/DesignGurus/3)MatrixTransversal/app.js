function count_islands(arr) {
  let islandArray = [],
    visitedMatrix = Array(arr.length)
      .fill(false)
      .map((val) => Array(arr[0].length).fill(false));
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[0].length; column++) {
      let currentNode = arr[row][column];
      if (currentNode === 1 && !visitedMatrix[row][column]) {
        let islands = BFSSearch(arr, row, column, visitedMatrix);
        islandArray.push(islands);
      }
    }
  }
  console.log(islandArray);
  return islandArray.length;
}

function BFSSearch(arr, row, column, visitedMatrix) {
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

console.log(count_islands(arr1));
console.log(count_islands(arr2));

// function count_islands_BFS(matrix) {
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   let totalIslands = 0;
//   const visited = Array(rows)
//     .fill(false)
//     .map(() => Array(cols).fill(false));

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       // if the cell has not been visited before and is a land
//       if (matrix[i][j] === 1 && !visited[i][j]) {
//         // we have found an island
//         totalIslands++;
//         visit_island_BFS(matrix, visited, i, j);
//       }
//     }
//   }
//   return totalIslands;
// }

// function visit_island_BFS(matrix, visited, x, y) {
//   const neighbors = [[x, y]];
//   while (neighbors.length > 0) {
//     const cell = neighbors.shift();
//     const row = cell[0];
//     const col = cell[1];

//     if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
//       continue; // continue, if it is not a valid cell
//     if (matrix[row][col] == 0 || visited[row][col]) continue; // continue if the cell is water or visited

//     visited[row][col] = true; // mark the visited array

//     // insert all neighboring cells to the queue for BFS
//     neighbors.push([row + 1, col]); // lower cell
//     neighbors.push([row - 1, col]); // upper cell
//     neighbors.push([row, col + 1]); // right cell
//     neighbors.push([row, col - 1]); // left cell
//   }
// }
