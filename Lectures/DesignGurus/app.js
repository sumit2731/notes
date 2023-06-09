function find_cycle_DFS(matrix) {
  let visitedMatrix = [];
  for(let row = 0; row < matrix.length; row++) {
    for(let column = 0; column < matrix[0].length; column++) {
      if(!visitedMatrix[`${row}${column}`] && has_cycle(matrix,row,column,matrix[row][column],visitedMatrix,-1,-1)) return true;
    }
  }
  return false;
}

function has_cycle(matrix,row,column,expectedValue,visitedMatrix,prevRow,prevColumn) {
  if(row < 0 || column < 0 || row >= matrix.length || column >= matrix[0].length) return false;
  else if((matrix[row][column] == expectedValue) && visitedMatrix[`${row}${column}`]) return true;
  else if((matrix[row][column] == expectedValue) && !visitedMatrix[`${row}${column}`]) {
    visitedMatrix[`${row}${column}`] = true;
    if(((row-1) != prevRow) && has_cycle(matrix,row-1,column,expectedValue,visitedMatrix,row,column)) return true;
    if(((row+1) != prevRow) && has_cycle(matrix,row+1,column,expectedValue,visitedMatrix,row,column)) return true;
    if(((column-1) != prevColumn) && has_cycle(matrix,row,column-1,expectedValue,visitedMatrix,row,column)) return true;
    if(((column+1) != prevColumn) && has_cycle(matrix,row,column+1,expectedValue,visitedMatrix,row,column)) return true;
  }
  else false;
}



console.log(find_cycle_DFS([
['a', 'a', 'a', 'a'],
['b', 'a', 'c', 'a'],
['b', 'a', 'c', 'a'],
['b', 'a', 'a', 'a']
]));


console.log(find_cycle_DFS([
['a', 'a', 'a', 'a'],
['a', 'b', 'b', 'a'],
['a', 'b', 'a', 'a'],
['a', 'a', 'a', 'c']
]));


console.log(find_cycle_DFS([
['a', 'b', 'e', 'b'],
['b', 'b', 'b', 'b'],
['b', 'c', 'c', 'd'],
['c', 'c', 'd', 'd']
]));