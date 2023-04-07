/* 
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

*/


/**
 * MY Solution - time complexity is slighty larger thsan course solution
 */
function getCharToBeRemoved(objDic) {
    let smallestIndex = Infinity, charToBeRemoved;
    for(let char in objDic) {
        let index = objDic[char];
        if(index < smallestIndex) charToBeRemoved = char
    }
    return charToBeRemoved;
}

function longestSubStr(str,k) {
    let longest = 0, objDic = {}, windowStart = 0, windowEnd = 0
    for(windowEnd = 0; windowEnd<str.length;windowEnd++) {
        let char = str[windowEnd];
        if((char in objDic) || (Object.keys(objDic).length < k)) objDic[char] = windowEnd;
        else {
            longest = Math.max(longest, windowEnd-windowStart);
            let charToBeRemoved = getCharToBeRemoved(objDic);
            windowStart = objDic[charToBeRemoved] + 1;
            delete objDic[charToBeRemoved];
            objDic[char] = windowEnd
        }
    }
    longest = Math.max(longest, windowEnd-windowStart);
    return longest;
}

// console.log(longestSubStr('araaci',2));
// console.log(longestSubStr('araaci',1));
// console.log(longestSubStr('cbbebi',3));


/**
 * Solution Given in course
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
        // shrink the sliding window, until we are left with 'k' distinct characters in 
        // the char_frequency
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

/**
 * The above algorithm’s time complexity will be O(N)O(N), where NN is the number of characters in the input string. The outer 
 * for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity
 * of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent 
 * to O(N)
*/


console.log(`Length of the longest substring: `
    + longest_substring_with_k_distinct('araaci', 2));
console.log(`Length of the longest substring: `
    + longest_substring_with_k_distinct('araaci', 1));
console.log(`Length of the longest substring: `
    + longest_substring_with_k_distinct('cbbebi', 3));