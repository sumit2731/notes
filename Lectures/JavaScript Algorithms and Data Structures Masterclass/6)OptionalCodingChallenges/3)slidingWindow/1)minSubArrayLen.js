/**
 * Write a function called "minSubArrayLen"-which accepts two parameters - an array of positive integers and a positive integer.
 * Note this approach only works for positive integrs 
 * 
 * This function should return the minimal length of a "contiguous"  subarray of which 
 * the sum is greater than or equal to the integer passed to the function. If there isn't
 *  one, return 0 instead.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

/**
  *My Solution with same complexity as that of udemy course
*/

function minSubArrayLen(minSum, arr) {
  let tempSum = 0, minLength = Infinity, left = 0, right = 0;
  while(right <= arr.length-1 || tempSum >= minSum) {
    if(tempSum >= minSum) {
      minLength = Math.min(minLength,right - left );
      if(minLength === 1) return 1;
      tempSum -= arr[left];
      left++;
    }
    else {
      tempSum += arr[right];
      right++;
    }
    if(tempSum >= minSum) minLength = Math.min(minLength,right - left );
  }
  return (minLength === Infinity) ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2,1,5,2,3,2]));


 /**
  * 
  *Solution given in course
  */
function minSubArrayLen2(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length) {
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum) {
      minLen = Math.min(minLen, end-start);
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

//console.log(minSubArrayLen([2,3,1,2,9,4,3],7));

/* 
Educative Solution is best solution
*/
 function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}



/*
console.log(minSubArrayLen([2,3,1,2,4,3],7))// 2
console.log(minSubArrayLen([2,1,6,5,4],9))// 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52))// 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39))//3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55))//5
console.log(minSubArrayLen([4,3,3,8,1,2,3],11))//2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))// 0
*/