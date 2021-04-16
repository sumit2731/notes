function mergeSort(array) {
    if(array.length <=1) return array;
    let mid = array.length/2;
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return mergeArrays(left,right);
}

/*
This function merges 2 sorted arrays into a sorted array
Time complexiy - O(n+m)
Space Complexity - O(n+m)
*/
function mergeArrays(arr1, arr2) {
  let firstArrayIndex = 0,secondArrayIndex = 0 ,mergedArray = [];
  while (firstArrayIndex < arr1.length && secondArrayIndex < arr2.length) {
    if (arr1[firstArrayIndex] < arr2[secondArrayIndex]) {
      mergedArray.push(arr1[firstArrayIndex]);
      firstArrayIndex++;
    } else {
      mergedArray.push(arr2[secondArrayIndex]);
      secondArrayIndex++;
    }
  }
  mergedArray = mergedArray
    .concat(arr1.slice(firstArrayIndex))
    .concat(arr2.slice(secondArrayIndex));
  return mergedArray;
}

console.log(mergeSort([100,90,500,45,3]));


/* 
Big O of mergeSort -
  Time Complexity -
    Best Case,Average Case,Worst case -O(n Logn)

    log n comes from no of steps that are required to form full array after splitting whole array into single element arrays. In figure 5,
    for sorting 8 arrays, we have 3 steps until we generate a full rray from single element arrays. also in each step, we have to merge 
    arrays, so in row we have to make O(n) comparisons to merge array, hence we get O(n log n) complexity.here in figure 5 in each row,we
    have total of 8 items to be sorted.

  Space Compexity - O(n)
*/