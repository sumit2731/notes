/**
 * My Solution.
 * improvement - in inner loop use j < i-1. that will make calculations easier
 */

function bubbleSort1(arr) {
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

/* 
Time Complexity -
    Worst Case - O(n*n)
    Average Case - o(n*n)
    Best Case(With Nearly Sorted Array and with optimized soltution) - O(n)
*/

console.log(bubbleSort1([70, 10, 20, 30, 40]));

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
