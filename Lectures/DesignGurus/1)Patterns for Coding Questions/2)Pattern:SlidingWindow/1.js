//Maximum Sum Subarray of Size K (easy)
/* 
Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4]. 

*/


/**
 * Brute Force solution
 * 
 * Complexity - O(n-k * k)
 */
function maxSubArray(arr,k) {
    let tempSum = 0, maxSum = 0;
    for(let i = 0; i<= arr.length-k; i++) {
        for(let j = i ; j<=i+k-1; j++) {
            tempSum += arr[j];
        }
        maxSum = Math.max(maxSum, tempSum);
        tempSum = 0;
    }
    return maxSum;
}

console.log(maxSubArray([2, 1, 5, 1, 3, 2],3))



/**
 * My solution
 * Time complexity - O(n)
 */
function maxSubArray2(arr, k) {
    
    let maxSum = 0, tempSum = 0;
    
    for(let i = 0; i<arr.length; i++) {
        tempSum += arr[i];
        if(i >= k-1) {
            maxSum = Math.max(maxSum, tempSum);
            tempSum -= arr[i+1-k]
        }
    }
    
    return maxSum;
}

console.log(maxSubArray([2, 1, 5, 1, 3, 2],3 ));

/**
 * Course solution
 */

function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

    for (window_end = 0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end]; // add the next element
        // slide the window, no need to slide if we've not hit the window size of 'k'
        if (window_end >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart += 1; // slide the window ahead
        }
    }
    return maxSum;
}