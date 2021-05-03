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

function quickSort(array, left = 0, right = array.length-1) {
    if(left < right) {
        let pivotIndex = pivot(array,left,right);
        quickSort(array,left,pivotIndex-1);
        quickSort(array,pivotIndex+1,right);
    }
    return array;
}    

console.log(quickSort([50,40,100,10,5,110,20,35]));

