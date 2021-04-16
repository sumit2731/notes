/**
 * Input is sorted array, we need to find first pair , whose sum is 0 
 * returned array that contains that 2 values. if there is no such pair,
 * return undefined
 */

 /**
  * Naive Approach 1
  * Time Complexity - O(n*n)
  * Space Complexity - O(1)
  */
 function sumZero(array) {
    for(let value of array) {
        let negativeValue = array.find(val => val = -value);
        if(negativeValue) return [value, negativeValue]
        return undefined
    }
 }

 /**
  * Naive Approach 2(Shown in Tutorial),better than approach 1, because second loop is starting from i
  * Time Complexity - O(n*n)
  * Space Complexity - O(1)
  */
 function sumZero2(array) {
    for(let i = 0; i< array.length; i++) {
        for(let j = i+1; j< array.length; j++) {
            if( array[i] + array[j] == 0) return [array[i], array[j]];
        }
    }
    return undefined;
 }

/**
 * MultiPointers Apprach 2(as Shown in Course )
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * Here we have 2 pointers that are on each end and move toards each other
 */

 function sumZero4(arr) {
     let left = 0;
     let right = arr.length -1;
     while(left < right) {
         let sum = arr[left] + arr[right];
         if(sum == 0) return [arr[left], arr[right]];
         else if(sum > 0) right --;
         else left++
     }
 }
 //console.log(sumZero4([-100, -5, -3, 3, 7, 11]));
