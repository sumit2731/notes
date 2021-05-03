/* 
*My solution
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) if (arr[i] > arr[j]) break;
    if (j != i - 1) replace(arr, i, j + 1, arr[i]);
  }
  return arr;
}

function replace(arr, removeIndex, addIndex, element) {
  arr.splice(removeIndex, 1);
  arr.splice(addIndex, 0, element);
}

/**
 * Course Solution - btter than mine, beacuse we use splice which is needs a additional iteration
 */

function insertionSort3(array) {
  for (let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = currentVal;
    }   
  return array;
}

console.log(insertionSort2([2,1,9,76,4]));


/* 
Time Complexity-
  best - O(n)(when array is fully sorted)
  average-O(n*n)
  worst -O(n*n)
*/