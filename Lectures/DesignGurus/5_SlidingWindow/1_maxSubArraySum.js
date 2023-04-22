/**
 * @My_Solution
 */

function maxSubArraySum(arr, k) {
    let windowStart = 0, windowEnd = 0, maxSum = -Infinity, tempSum = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        tempSum += arr[windowEnd];
        let windowLength = windowEnd-windowStart +1
        if( windowLength< k) continue;
        else if(windowLength === k) maxSum = tempSum;
        else {
            tempSum -= arr[windowStart];
            windowStart++;
            maxSum = Math.max(maxSum, tempSum);
        }
    }
    return maxSum;
}

/**
 * @Course Approach Similar to Mine
 */
function maxSubArraySum2(arr, k) {
    let windowStart = 0,windowEnd = 0, maxSum = -Infinity, tempSum =0;
    for(let windowEnd = 0; windowEnd< arr.length; windowEnd++) {
        tempSum += arr[windowEnd];
        if(windowEnd >= k-1) {
            maxSum = Math.max(maxSum,tempSum);
            tempSum -= arr[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}

console.log(maxSubArraySum2([2, 1, 5, 1, 3, 2],3));
console.log(maxSubArraySum2([2, 3, 4, 1, 5],2));