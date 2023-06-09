function landPerimeter(matrix) {
  let perimeter = 0,
    visited = {};
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 1 && !visited[`${row}${column}`]) {
        //perimeter += DFS_Recursive(matrix, row, column, visited);
        perimeter += BFS_Iterative(matrix, row, column, visited);
      }
    }
  }
  return perimeter;
}

function DFS_Recursive(arr, row, column, visited) {
  let perimeter = 0;
  if (row < 0 || column < 0 || row >= arr.length || column >= arr[0].length) return 1;
  else if (arr[row][column] === 0) return 1;
  else if (arr[row][column] === 1 && !visited[`${row}${column}`]) {
    visited[`${row}${column}`] = true;
    perimeter += DFS_iterative(arr, row, column - 1, visited);
    perimeter += DFS_iterative(arr, row, column + 1, visited);
    perimeter += DFS_iterative(arr, row - 1, column, visited);
    perimeter += DFS_iterative(arr, row + 1, column, visited);
  }
  return perimeter;
}

function BFS_Iterative(arr, row, column, visisted) {
  let perimeter = 0,
    queue = [[row, column]];
  while (queue.length) {
    let [currentRow, currentColumn] = queue.shift();
    if (
      currentRow < 0 ||
      currentColumn < 0 ||
      currentRow >= arr.length ||
      currentColumn >= arr[0].length
    )
      perimeter++;
    else if (arr[currentRow][currentColumn] === 0) perimeter++;
    else if (
      arr[currentRow][currentColumn] === 1 &&
      !visisted[`${currentRow}${currentColumn}`]
    ) {
      visisted[`${currentRow}${currentColumn}`] = true;
      queue.push([currentRow, currentColumn - 1]);
      queue.push([currentRow, currentColumn + 1]);
      queue.push([currentRow - 1, currentColumn]);
      queue.push([currentRow + 1, currentColumn]);
    }
  }
  return perimeter;
}

let arr1 = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

let arr2 = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
];

console.log(landPerimeter(arr1));
console.log(landPerimeter(arr2));
