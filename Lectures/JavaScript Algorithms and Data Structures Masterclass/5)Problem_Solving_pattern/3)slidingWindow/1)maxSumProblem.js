/**
 * write a function that accepts 2 arguments- array of integars and number n.
 * function should calculate the maximum sum of n consecutive elements in array.
 * array is not sorted.
 * ([1,2,5,2,8,1,8],2) => 10
 * ([1,2,5,2,8,1,5],3) => 17
 * ([1,2,5,2,8,1,5],4) => 19
 * ([],4) => null
 */

/**
 * My Solution - Naive Appraoch
 * Time Complexity - O(n*n)
 */
function maxSubArraySum(array,n) {
    if(array.length < n) return undefined
    let sum = -Infinity;;
    for(let i=0; i<=array.length-n; i++) {
        let tempSum = 0;
        for(let j= 0; j < n; j++) {
            tempSum += array[i+j];
        }
        if(tempSum > sum || i ==0) sum = tempSum;   
    }
    return sum;
}

/**
 * My Solution - Sliding Window Aproach
 * Time Complexity -O(m+n)
 */

function maxSubArraySum2(array,n) {
    if (array.length < n) return undefined;
    let sum = -0;
    let tempSum =0;
    for(let i=0; i<n; i++) {
        sum += array[i];
        tempSum = sum;
    }
    for(let i =0; i<= (array.length-1-n); i++) {
        tempSum = tempSum - array[i] + array[i + n];
        if(tempSum > sum) sum = tempSum
    }
    return sum;
}


/* 
Educative Soluion - Solution
*/

function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,windowSum = 0,windowStart = 0;

    for (window_end = 0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end]; // add the next element
        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if (window_end >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart += 1; // slide the window ahead
        }
    }
    return maxSum;
}

console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 8], 1));
console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 8], 2));
console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 8], 3));
console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 8], 4));