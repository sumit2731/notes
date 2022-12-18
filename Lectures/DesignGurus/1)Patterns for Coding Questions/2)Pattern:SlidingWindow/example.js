//Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

/**
 * Brute Force
 * Time Complexity - O(n *k)
 */
function findAverage(arr, k) {
    let avgArr = [];
    for(let i = 0; i<=arr.length-k ; i++) {
        let sum = 0;
        for(let j= i; j<i+k ; j++) {
            sum += arr[j];
        }
        avgArr.push(sum/k);
    }
    return avgArr;
}

//sliding window

/**
 * Sliding Window
 *  Time complexity - O(n)
 */
function findAverage2(arr, k) {
    let avgArr = [], tempSum = 0;
    for(let i = 0; i< k ; i++) {
        tempSum += arr[i];
    }
    avgArr.push(tempSum/k);
    for(let i = 0; i<= arr.length-1-k ; i++) {
        tempSum = tempSum - arr[i] + arr[i+k];
        avgArr.push(tempSum/k);
    }
    return avgArr;
}

console.log(findAverage2([1,2,3,4,5],3))


/**
 * Way shown in course
 */

function findAverage3(arr, k) {
    
    let avgArr = [], tempSum = 0;
    
    for(let i = 0; i< arr.length; i++) {
        tempSum += arr[i];
        if(i >= k-1) {
            avgArr.push(tempSum/k);
            tempSum -= arr[i+1-k];
        }
    }
    
    return avgArr;    
}

console.log(findAverage3([1,2,3,4,5],3))