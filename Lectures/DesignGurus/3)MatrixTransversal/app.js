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

let arr = [
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
let arr = [
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

console.log(count_islands(arr));
