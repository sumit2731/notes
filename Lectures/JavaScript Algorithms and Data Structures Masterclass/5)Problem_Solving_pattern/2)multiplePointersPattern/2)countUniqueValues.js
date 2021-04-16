/**
 * Implement a function that gives the count of unique values in  a "sorted" array
 */


/**
 * My way(without using any pattern)
 * Time Complexity- O(n)
 * Space Compexity - O(1)
 */


 function UniqueValues(array) {
    let lastValue;
    let uniqueValueCount = array.reduce((accum, currentValue) => {
         if (currentValue != lastValue) accum++;
         lastValue = currentValue;
         return accum;
     }, 0);

    return uniqueValueCount;
}

//console.log(UniqueValues([1,1,1,1,2,3]));


/**
 *My way using Multiple Pointers Approach
 * Time Complexity- O(n)
 * Space Compexity - O(1)
 */

 function UniqueValues2(array) {
    let i = 0;
    let j = 1
    uniqueCount = 1;
    while(j <= array.length-1) {
        if (array[i] !== array[j]) uniqueCount++;
        i++, j++;
    }
    return uniqueCount;
 }

 //console.log(UniqueValues2([1, 1, 1, 1, 2, 2]));



 /**
  * Multiple Pointer Solution(course approach) _ modifying the orignal Array
  *Time Complexity- O(n)
  *Space Compexity - O(1)
  */

function UniqueValues3(array) {
    if(array.length == 0) return 0;
    let i = 0;
    let j = 1;
    while (j <= array.length - 1) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
        j++;
    }
    return i+1;
}

console.log(UniqueValues3([1, 1, 1, 1, 2, 3]));