function mergeSort(array) {
    if(array.length <=1) return array;
    let mid = array.length/2;
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return mergeArrays(left,right);
}

function mergeArrays(arr1, arr2) {
  firstArrayIndex = 0;
  secondArrayIndex = 0;
  mergedArray = [];
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