function count_closed_islands_DFS(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array(rows)
    .fill(false)
    .map(() => Array(cols).fill(false));
  let countClosedIslands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        // only if the cell is a land and not visited
        if (is_closed_island_DFS(matrix, visited, i, j)) countClosedIslands++;
      }
    }
  }
  return countClosedIslands;
}

function is_closed_island_DFS(matrix, visited, x, y) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length)
    return false; // returning false since the island is touching an edge
  if (matrix[x][y] === 0 || visited[x][y]) return true; // returning true as the island is surrounded by water

  visited[x][y] = true; // mark the cell visited by making it a water cell

  let isClosed = true; // counting the current cell
  // recursively visit all neighboring cells (horizontally & vertically)
  isClosed &= is_closed_island_DFS(matrix, visited, x + 1, y); // lower cell
  isClosed &= is_closed_island_DFS(matrix, visited, x - 1, y); // upper cell
  isClosed &= is_closed_island_DFS(matrix, visited, x, y + 1); // right cell
  isClosed &= is_closed_island_DFS(matrix, visited, x, y - 1); // left cell

  return isClosed;
}

console.log(
  count_closed_islands_DFS([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  count_closed_islands_DFS([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
