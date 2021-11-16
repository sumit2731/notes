/**
 * Given a sorted array of integers and a target average, determine if there is a pair of 
 * values in the array where the average of the pair equals the target average. There may 
 * be more than one pair that matches the average target.
 * 
 * constraints -
 * Time: O(n)
 * Space: O(1)
 */

function averagePair(arr, avgNum) {
    let leftPointer = 0, rightPointer = arr.length-1;
    while(leftPointer < rightPointer) {
        let tempAverage = (arr[leftPointer] + arr[rightPointer])/2;
        if(tempAverage === avgNum) return true;
        else if(tempAverage < avgNum) leftPointer++;
        else rightPointer--;
    }
    return false;
}

console.log(averagePair([1,2,3],2.5));

/* 
See Alternate solution in educative solution
*/
function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (targetSum - num in nums) {
        return [nums[targetSum - num], i];
      }
      nums[arr[i]] = i;
    }
    return [-1, -1];
}

