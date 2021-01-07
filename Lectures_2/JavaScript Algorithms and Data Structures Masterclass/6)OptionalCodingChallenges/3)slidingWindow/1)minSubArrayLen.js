/**
 * Write a function called "minSubArrayLen"-which accepts two parameters - an array of positive integers and a positive integer. 
 * 
 * This function should return the minimal length of a "contiguous"  subarray of which 
 * the sum is greater than or equal to the integer passed to the function. If there isn't
 *  one, return 0 instead.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

 /**
  * 
  *Solution given in course
  */
 function minSubArrayLen(nums, sum) {
   let total = 0;
   let start = 0;
   let end = 0;
   let minLen = Infinity;

   while (start < nums.length) {
     // if current window doesn't add up to the given sum then
     // move the window to right
     if (total < sum && end < nums.length) {
       total += nums[end];
       end++;
     }
     // if current window adds up to at least the sum given then
     // we can shrink the window
     else if (total >= sum) {
       minLen = Math.min(minLen, end - start);
       total -= nums[start];
       start++;
     }
     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
     else {
       break;
     }
   }

   return minLen === Infinity ? 0 : minLen;
 }

 //console.log(minSubArrayLen([2,3,1,2,4,3],7));

 /**
  *My Solution with same complexity
  */

function minSubArray2(array, sum) {
  let start = 0;
  let end =0;
  let minLength = Infinity;
  let tempSum = 0;

  while (true) {
    tempSum += array[end];
    if (start == end && tempSum >= sum) return 1;
    if (tempSum < sum && end < array.length-1) {
      end++;
    }
    
    else if(tempSum >= sum) {
      minLength = Math.min(minLength, end-start+1);
      tempSum = tempSum - array[start] -array[end];
      start++;
    } else break; 
  }
  if (minLength == Infinity) return 0;
  return minLength;
  
}

//console.log(minSubArray4([2, 3, 1, 2, 400, 300], 700));
console.log(minSubArray2([1,4,16,22,5,7,8,9,10],39));