/* 
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of 
the longest substring having the same letters after replacement.

Example 1:

    Input: String="aabccbb", k=2
    Output: 5
    Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:

    Input: String="abbcb", k=1
    Output: 4
    Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:

    Input: String="abccde", k=1
    Output: 3
    Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

function getmaxRepChar(objDic) {
    let maxCount = 0, maxRepChar;
    for(let char in objDic) {
        let currentCount = objDic[char];
        if(currentCount > maxCount) {
            maxCount = currentCount;
            maxRepChar = char;
        }
    }
    return maxRepChar;
}

function longestSubStr(str,k) {
    let windowStart = 0, windowEnd = 0, objDic = {}, maxLength = 0, maxChar = str[0];
    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentChar = str[windowEnd];
        if(currentChar in objDic) {
            objDic[currentChar]++;
            if(objDic[currentChar] > objDic[maxChar]) maxChar = currentChar;
        } else {
            objDic[currentChar] = 1
        }
        let charToBeReplaced = (windowEnd-windowStart +1) - objDic[maxChar];
        if(charToBeReplaced > k) {
            maxLength = Math.max(maxLength, windowEnd-windowStart);
            while(charToBeReplaced > k) {
                let firstChar = str[windowStart];
                if(firstChar !== maxChar) {
                    windowStart++;
                    objDic[firstChar]--;
                    charToBeReplaced--;
                }
                else {
                    objDic[firstChar]--;
                    maxChar = getmaxRepChar(objDic);
                    windowStart++;
                    charToBeReplaced = (windowEnd-windowStart +1) - objDic[maxChar]
                }
            }
        }
        
    }
    maxLength = Math.max(maxLength, windowEnd-windowStart);
    return maxLength;
}

console.log(longestSubStr('aabccbb', 2)); //5
console.log(longestSubStr('abbcb', 1)); //4
console.log(longestSubStr('abccde', 1)); //3