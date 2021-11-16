/* 
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

/* 
My Solution(course soltion is easier to understand and time complexity is better)
*/

const longest_substring_with_k_distinct = function(str, k) {
    
  function minkey(stringObj) {
    let minValue = Infinity,  minValueKey = '';
    for(let key of Object.keys(stringObj)) {
      if(stringObj[key] < minValue) {
        minValue = stringObj[key];
        minValueKey = key;
      }
    }
    return minValueKey;
  }
  // TODO: Write your code here
  let start = 0, end = 0, strObj = {}, maxLength = 0;
  while(end <= str.length -1) {
      let char = str[end];
      if(strObj[char]) strObj[char] = end +1;
      else {
          if(Object.keys(strObj).length === k) {
            maxLength = Math.max(maxLength,end-start );
            let minValueKey =  minkey(strObj);
            start = strObj[minValueKey];
            strObj[char] = end+1;
            delete strObj[minValueKey]
          }
          else strObj[char] = end +1;
      }
      end++;
  }
  maxLength = Math.max(maxLength,end-start );
  return maxLength;
};
  
  console.log(longest_substring_with_k_distinct("araaci", 1));


  /* 

  Course Solution -(easier to understand,and better)

  The above algorithm’s time complexity will be O(N), where N is the number of characters in the input string. The outer
   for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time 
   complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N)
  
  */

  function longest_substring_with_k_distinct(str, k) {
    let windowStart = 0,
      maxLength = 0,
      charFrequency = {};
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1;
      // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
      while (Object.keys(charFrequency).length > k) {
        const leftChar = str[windowStart];
        charFrequency[leftChar] -= 1;
        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
        windowStart += 1; // shrink the window
      }
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }


  /* 
  Similar problem - 

Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is 
to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until
you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.
  
*/