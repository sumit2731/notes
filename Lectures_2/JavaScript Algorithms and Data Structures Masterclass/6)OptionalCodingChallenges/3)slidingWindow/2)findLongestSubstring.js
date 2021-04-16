/**
 * write a function called "findLongestSubstring" which accepts a string and returns the
 *  length of the longest substring with all distinct characters.
 * 
 * Time Complexity - O(n)
 */


 /**
 * My Solution 2 - Using Sliding Window Approach
 * Complexity - O(n)
 */

 function findLongestSubstring2(string) {
     let start = 0,end = 0; stringObj = {},maxlength = 0;
     while (end < string.length) {
       let char = string[end];
        if (stringObj[char]) {
            maxlength = Math.max(maxlength, end - start);
            start = end =  stringObj[char];
            //end = stringObj[string[end]];
            stringObj = {};
        }
        else {
            stringObj[char] = end+1;
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
  let maxStringLength = 0,stringObj = {},start =0;
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

/**
 * My Solution on top of course solution
 */

function findLongestSubstring4(str) {
    let strObj = {}, maxLength = 0, start = 0;
    for(let i = 0;i<str.length;i++) {
        let char = str[i];
        if((strObj[char]) && (strObj[char]-1 >= start)) {
            maxLength = Math.max(maxLength, i-start);
            start = Math.max(start,strObj[char]);
        }
        strObj[char] = i+1;
    }
    maxLength = Math.max(maxLength,str.length - start);
    return maxLength;
}
