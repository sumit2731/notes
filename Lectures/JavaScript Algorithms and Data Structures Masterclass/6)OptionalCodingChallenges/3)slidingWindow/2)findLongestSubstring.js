/**
 * write a function called "findLongestSubstring" which accepts a string and returns the
 *  length of the longest substring with all distinct characters.
 * 
 * Time Complexity - O(n)
 */

/**
 * Tutorial Approach
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

// console.log(findLongestSubstring2("rithmschool"));//7
// console.log(findLongestSubstring2("thisisawesome"));//6
// console.log(findLongestSubstring2("thecatinthehat"));//7
// console.log(findLongestSubstring2("bbbbb"));//1
// console.log(findLongestSubstring2("longestsubstring"));//8
// console.log(findLongestSubstring2("thisishowwedoit"));//6

/**
 * My Solution (Best One)
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


// console.log(findLongestSubstring3("rithmschool"));//7
// console.log(findLongestSubstring3("thisisawesome"));//6
// console.log(findLongestSubstring3("thecatinthehat"));//7
// console.log(findLongestSubstring3("bbbbb"));//1
// console.log(findLongestSubstring3("longestsubstring"));//8
// console.log(findLongestSubstring3("thisishowwedoit"));//6