/* 
Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is 
less than the target number.

Ex 1-
    Input: [2, 5, 3, 10], target=30 
    Output: [2], [5], [2, 5], [3], [5, 3], [10]
    Explanation: There are six contiguous subarrays whose product is less than the target.

Ex 2-

    Input: [8, 2, 6, 5], target=50 
    Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
    Explanation: There are seven contiguous subarrays whose product is less than the target.
*/

/* 
My Solution
*/
const find_subarrays = function(arr, target) {
    result = [];
    //n
    for(let i = 0; i< arr.length; i++) {
        let currentProduct = arr[i], currentArray = [arr[i]];
        if(arr[i] > target) break;
        else result.push([arr[i]]);
        //n
        for(let j = i+1; j< arr.length; j++) {
            currentProduct = currentProduct * arr[j];
            if(currentProduct >= target) break;
            else {
                //n
                currentArray.push(arr[j]);
                result.push([...currentArray]);
            }
        }
    }
    return result;
};

/* 
Course Solution
*/

function find_subarrays(arr, target) {
    let result = [],
      product = 1,
      left = 0;
      //n
    for (right = 0; right < arr.length; right++) {
      product *= arr[right];
      //n
      while ((product >= target && left < arr.length)) {
        product /= arr[left];
        left += 1;
      }
      // since the product of all numbers from left to right is less than the target therefore,
      // all subarrays from left to right will have a product less than the target too; to avoid
      // duplicates, we will start with a subarray containing only arr[right] and then extend it
      const tempList = new Deque();
      //n
      for (let i = right; i > left - 1; i--) {
        tempList.unshift(arr[i]);
        result.push(tempList.toArray());
      }
    }
    return result;
  }

console.log(find_subarrays([2,5,3,10],30));