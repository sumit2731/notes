/**
 * My Solution
 * here extra conditions in if can be removed, we have added them just
 *  to avoid un neccessary swaps
 */

function insertionSort(array) {
    for (let i =1; i< array.length; i++) {
        let shouldSwapValue = false;
        for (var j = i-1; j >= 0; j--) {
            if (array[i] > array[j]) {
                shouldSwapValue = true;
                break;
            }
        }
        if (shouldSwapValue && (j != (i-1))) {
          array.splice(j + 1, 0, array[i]);
          array.splice(i + 1, 1);
        }
        //It means there is no element in sorted array that is larger than
        else if (!shouldSwapValue) {
          array.unshift(array[i]);
          array.splice(i + 1, 1);
        }
    }
    return array;
}

/* 
*My solution 2
*/

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) break;
    }
    if (j == -1) replace(arr, i, 0, arr[i]);
    else if (j != i - 1) replace(arr, i, j + 1, arr[i]);
  }
  return arr;
}

function replace(arr, removeIndex, addIndex, element) {
  arr.splice(removeIndex, 1);
  arr.splice(addIndex, 0, element);
}

/**
 * Course Solution
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