/**
 * My Solution
 */

function bubbleSort(arr) {
    let noSwap = false;
  for (let i = 0; i < arr.length; i++) {
      noSwap = true;
    for (let j = 0; j < arr.length-1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j] ];
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([70, 10, 20, 30, 40]));
