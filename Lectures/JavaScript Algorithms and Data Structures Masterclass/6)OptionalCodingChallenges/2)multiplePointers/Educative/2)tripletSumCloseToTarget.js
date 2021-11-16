/* 
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the 
target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum
of the triplet with the smallest sum.

Example 1-

    Input: [-2, 0, 1, 2], target=2
    Output: 1
    Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Example 2 -

    Input: [-3, -1, 1, 2], target=1
    Output: 0
    Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

*/

/* 
My and Course Approach
*/
const triplet_sum_close_to_target = function(arr, target_sum) {
    // TODO: Write your code here
    let closestSum;
    //nlogn
    arr = arr.sort((a,b) => a-b);
    //n
    for(let i = 0; i<arr.length; i++) {
      if((i > 0) && (arr[i] === arr[i-1])) continue;
      let left = i+1, right = arr.length-1, requiredSum = target_sum - arr[i];
      while(right > left) {
        let tempSum = arr[left] + arr[right];
        if(tempSum === requiredSum) return target_sum;
        else if(tempSum < requiredSum) {
          left++;
          while(arr[left] === arr[left-1]) left++
        }
        else {
          right--;
          while(arr[right] === arr[right+1]) right--
        }
        let tempTripSum = tempSum + arr[i];
        if( (!closestSum && (closestSum !== 0)) ||
           Math.abs(target_sum - tempTripSum) < Math.abs(target_sum -closestSum)  ||
           ((Math.abs(target_sum - tempTripSum) === Math.abs(target_sum - closestSum )) && (tempTripSum < closestSum))
        ) closestSum = tempTripSum;
      }
    }
    return closestSum;
  };