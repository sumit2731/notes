/**
 * write a function called "findLongestSubstring" which accepts a string and returns the
 *  length of the longest substring with all distinct characters.
 * 
 * Time Complexity - O(n)
 */


 /**
  * MySolution - Sliding Window Approach
  * Complexity - O(n*N)
  */

  function findLongestSubstring(string) {
      let start = 0;
      let end = 1;
      let largestLength = (string.length > 0) ? 1: 0;
      let subStr;
      while (end < string.length) {
          subStr = string.slice(start, end+1);
          if (isCharDistinct(subStr) ) {
              largestLength = Math.max(largestLength, subStr.length);
              end++;
          } else start++;
      }
      return largestLength;
  }

  function isCharDistinct(string) {
    let stringObj = {};
    for (let char of string) {
        stringObj[char] = (stringObj[char] || 0)+ 1
    }
    for (let prop in stringObj) {
        if (stringObj[prop] > 1) return false
    }
    return true;
  }

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));


/**
 * My Solution 2 - Using Sliding Windiw Approach
 * Complexity - O(n)
 */

 function findLongestSubstring2(string) {
     let start = 0;
     let end = 0;
     let stringObj = {};
     let maxlength = 0;
     while (end < string.length) {
        if (stringObj[string[end]]) {
            maxlength = Math.max(maxlength, end - start);
            start = end =  stringObj[string[end]];
            //end = stringObj[string[end]];
            stringObj = {};
        }
        else {
            stringObj[string[end]] = end+1;
            end++;
        }
     }
     maxlength = Math.max(maxlength, end - start);
     return maxlength;
 }

// console.log(findLongestSubstring2("rithmschool"));
// console.log(findLongestSubstring2("thisisawesome"));
// console.log(findLongestSubstring2("thecatinthehat"));
// console.log(findLongestSubstring2("bbbbb"));
// console.log(findLongestSubstring2("longestsubstring"));
// console.log(findLongestSubstring2("thisishowwedoit"));

/**
 * Tutorial Approach(Best One)
 */




function findLongestSubstring3(string) {
  let maxStringLength = 0;
  let stringObj = {};
  let start =0;
  for(let i = 0; i< string.length; i++) {
    let char = string[i];
    if (stringObj[char]) {
      maxStringLength = Math.max(maxStringLength, i-start);
      start = Math.max(start, stringObj[char]);
    }
    stringObj[char] = i+1;
  }
  maxStringLength = Math.max(maxStringLength, string.length - start);
  return maxStringLength;
}

// console.log(findLongestSubstring3("rithmschool"));
// console.log(findLongestSubstring3("thisisawesome"));
// console.log(findLongestSubstring3("thecatinthehat"));
// console.log(findLongestSubstring3("bbbbb"));
// console.log(findLongestSubstring3("longestsubstring"));
// console.log(findLongestSubstring3("thisishowwedoit"));