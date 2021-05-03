/* 
    This function takes a array and index of pivot number.then it puts this pivot element into its right
     place. This helper function should do it in place i.e it shoudl not return new array,it should modify
     an existing array and it should return index of pivot.
*/


/* 
*My solution using Course pseudo code. It is better than course solution, because it
    works for any pivot element. whereas course solution, works only when pivot element
    is at zero index.
*/
function pivotHelper(array, pivotIndex, startIndex = 0, endIndex = array.length-1) {
  let pivotElement = array[pivotIndex];
  let index = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    if (i == pivotIndex) continue;
    if (array[i] < pivotElement) {
      [array[i], array[index]] = [array[index], array[i]];
      if (index == pivotIndex) pivotIndex = i;
      index++;
    }
  }
  [array[index], array[pivotIndex]] = [array[pivotIndex], array[index]];
  return index;
}

console.log([5,2,1,8,4,7,6,3]);

/* 
*Course Soution - Here pivot element is fixed at 0
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}