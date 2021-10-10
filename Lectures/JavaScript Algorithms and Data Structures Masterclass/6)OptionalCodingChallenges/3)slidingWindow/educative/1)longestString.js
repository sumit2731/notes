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
My Solution(better but a bit difficult to understand)
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
            let minValueKey =  minkey(strObj)
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
  Course Solution -(easier to understand, but performance is good of mine)
  
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