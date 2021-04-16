
//console.log(binarySearch([10,20,30,40,50,60,70,80],50));

/**
 * My Solution
 */
function binarySearch(arr, num) {
    let [start, end] = [0, arr.length-1];
    while(start < end) {
        let median = Math.floor((start+end)/2);
        if(arr[median] == num) return median;
        else if(num > arr[median]) start = median +1;
        else end = median -1;
    }
    if(arr[end] === num) return end;
    else return -1;
}


 /**
  * Tutorial Solution
  */

function binarySearch2(array,elem) {
    let start = 0;
    let end = array.length -1;
    let middle = Math.floor((start+end)/2);
    while (array[middle] !== elem && start <= end) {
        if (elem < array[middle]) end = middle -1;
        else start = middle +1;
        middle = Math.floor((start+end)/2);
    }
    return (array[middle] == elem) ? middle : -1;
}

console.log(binarySearch2([1,2,3,4,5], 6));



/* 
Time Complexity

Best Case - O(1)
Worst and Average case - O(logn)
Note - here w eare talking about base 2
*/