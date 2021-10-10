/* 
Given a string and a pattern, find out if the string contains any permutation of the pattern.
Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

    abc
    acb
    bac
    bca
    cab
    cba
If a string has ‘n’ distinct characters, it will have n!n! permutations.
 Example - 
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

*/

/* 
My Solution
Time Complexity - O(n*m), it defeats the idea of sliding pattern
*/

const find_permutation = function(str, pattern) {

    function isMatch(str1, strObj) {
      for(let char of str1) {
        if(strObj[char]) strObj[char] = strObj[char] - 1;
        else return false;
      }
      return true;
    }
    // TODO: Write your code here
    let patternObj = {};
    //n
    for(let char of pattern) {
      patternObj[char] = (patternObj[char] || 0) + 1;
    }
    let start =end = 0;
    //m
    while(end < str.length) {
      if((end-start + 1) === pattern.length) {
        if(isMatch(str.slice(start,end+1),{...patternObj})) return true;
        else {
          start++;
          end++;
        }
      }
      else end ++;
    }
    return false;
};

/* 
Course Solution - Better Way
*/

function find_permutation2(str, pattern) {
    let windowStart = 0,
      matched = 0,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }
  
    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // Decrement the frequency of matched character
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      if (matched === Object.keys(charFrequency).length) {
        return true;
      }
  
      // Shrink the sliding window
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
    return false;
  }
  
  
  console.log(`Permutation exist: ${find_permutation2('oidbcaf', 'abc')}`);
  // console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
  // console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
  // console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);