/**
 * Given a string, find the length of the longest substring, which has all distinct characters.

 Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/

/**
 * My solution
 * Time Complexity - O(2n) => O(n),as each item is atmost iterated 2 times
 * A bit complicated as some calcylations are needed
 */
function longestSubstr(str) {
    let longestLength = 0, objDic = {}, windowStart = 0, windowEnd = 0;
    for(windowEnd = 0; windowEnd< str.length; windowEnd++) {
        let currentChar = str[windowEnd];
        if(currentChar in objDic) {
            longestLength = Math.max(longestLength, windowEnd-windowStart);
            let lastIndexOfCurrentChar = objDic[currentChar];
            while(windowStart !== lastIndexOfCurrentChar+1) {
                let startingChar = str[windowStart];
                delete objDic[startingChar];
                windowStart++;
            }
        }
        else objDic[currentChar] = windowEnd;
    }
    longestLength = Math.max(longestLength, windowEnd-windowStart);
    return longestLength;
}

// console.log(longestSubstr('aabccbb'));
// console.log(longestSubstr('abbbb'));
// console.log(longestSubstr('abccde'));

/**
 * My Improved version
 */
function longestSubstr2(str) {
    
    let windowStart = 0, windowEnd = 0, objDic = {}, maxLength = 0;
    
    for(windowEnd = 0; windowEnd<str.length; windowEnd++) {
        let currentChar = str[windowEnd];
        if(currentChar in objDic) {
            if(objDic[currentChar] >= windowStart) {
                maxLength = Math.max(maxLength, windowEnd-windowStart);
                windowStart = objDic[currentChar]+1;
            }
        }
        objDic[currentChar] = windowEnd;
    }
    return maxLength;
}

console.log(longestSubstr2('aabccbb'));
console.log(longestSubstr2('abbbb'));
console.log(longestSubstr2('abccde'));


/**
 * Course solution
 */

function non_repeat_substring(str) {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // if the map already contains the 'rightChar', shrink the window from the beginning 
        // so that we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after 
            // its previous index and if 'windowStart' is already ahead of the last index of 
            // 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}