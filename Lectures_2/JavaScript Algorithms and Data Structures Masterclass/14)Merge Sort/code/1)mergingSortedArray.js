/* 
*My Implementation
Time Compelxity - O(n+m)
Space Complexity - O(n+m)
*/
function mergeArrays(arr1, arr2) {
    firstArrayIndex = 0;
    secondArrayIndex = 0;
    mergedArray = [];
    while(firstArrayIndex < arr1.length && secondArrayIndex < arr2.length) {
        if(arr1[firstArrayIndex] < arr2[secondArrayIndex]) {
            mergedArray.push(arr1[firstArrayIndex]);
            firstArrayIndex ++;
        }
        else {
            mergedArray.push(arr2[secondArrayIndex]);
            secondArrayIndex ++;
        } 
    }
    mergedArray = mergedArray.concat(arr1.slice(firstArrayIndex)).concat(arr2.slice(secondArrayIndex));
    return mergedArray;
}

console.log(mergeArrays([10, 200, 400], [3, 500, 600]));