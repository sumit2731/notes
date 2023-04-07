function find_distinct_islands(arr) {
  let visisted = {}, dStringObj = {};
  for (let row = 0; row < arr.length; row++) {
      for (let column = 0; column < arr[0].length; column++) {
          if (arr[row][column] === 1 && !visisted[`${row}${column}`]) {
              let [island, dString] = BFS_Transversal(arr, row, column, visisted)
              if(!dStringObj[dString]) dStringObj[dString] = []
              dStringObj[dString].push(island);
          }
      }
  }
  console.log(dStringObj);
  return Object.keys(dStringObj).length;

}

function BFS_Transversal(arr, row, column, visisted) {
  let queue = [[row, column,'O']], resultArray = [], dString = '';
  while (queue.length) {
      let [currentRow, currentColumn, direction] = queue.shift();
      if (currentRow < 0 || currentColumn < 0 || currentRow >= arr.length || currentColumn >= arr[0].length) continue;
      else if (arr[currentRow][currentColumn] === 1 && !visisted[`${currentRow}${currentColumn}`]) {
          resultArray.push([currentRow, currentColumn]);
          dString += direction;
          visisted[`${currentRow}${currentColumn}`] = true;
          queue.push([currentRow, currentColumn - 1,'L']);
          queue.push([currentRow, currentColumn + 1,'R']);
          queue.push([currentRow - 1, currentColumn, 'U']);
          queue.push([currentRow + 1, currentColumn, 'D']);
      }
  }
  return [resultArray, dString]
}

let arr1 = [
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1]
]

let arr2 = [
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0]
]
console.log(find_distinct_islands(arr1));
console.log(find_distinct_islands(arr2));