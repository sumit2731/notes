/**

Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 */

/**
 * My Solution as well as course solution
 */
function smallestSubArray(arr, minSum) {
    let windowStart= 0, minLength = Infinity , tempSum= 0;
    for(let windowEnd = 0; windowEnd <arr.length; windowEnd++) {
        tempSum += arr[windowEnd];
        while(tempSum >= minSum) {
            minLength = Math.min(minLength, windowEnd-windowStart+1);
            tempSum -= arr[windowStart];
            windowStart++;
        }
    }
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}

console.log(smallestSubArray([2, 1, 5, 2, 3, 2],7));
console.log(smallestSubArray([2, 1, 5, 2, 8],7));
console.log(smallestSubArray([3, 4, 1, 1, 6],8));