/**
 * My Solution and course solution
 */

function selectionSort(arr) {
    for (let i = 0; i< arr.length-1; i++) {
        let lowestIndex = i;
        for (let j =i+1; j<arr.length;j++) {
            if (arr[lowestIndex] > arr[j]) lowestIndex = j;
        } 
        if (lowestIndex != i) [arr[i] , arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([50,40,60,10,25]));